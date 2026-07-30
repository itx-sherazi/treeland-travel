"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  "Hajj Packages",
  "Umrah Packages",
  "Visa Assistance",
  "Flight Booking",
  "Hotel Reservation",
  "Ground Transport",
  "Other",
];

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.email("Enter a valid email").optional().or(z.literal("")),
  city: z.string().min(2, "City is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(5, "Please add a short message"),
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle2 className="text-brand-green" size={36} />
        <p className="font-semibold text-[#1f2937]">Message sent successfully!</p>
        <p className="text-sm text-gray-600">
          Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-green underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} className="input" placeholder="Your name" />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} className="input" placeholder="03XX-XXXXXXX" />
        </Field>
        <Field label="Email (optional)" error={errors.email?.message}>
          <input {...register("email")} className="input" placeholder="you@example.com" />
        </Field>
        <Field label="City" error={errors.city?.message}>
          <input {...register("city")} className="input" placeholder="Your city" />
        </Field>
        <Field label="Service" error={errors.service?.message} className="sm:col-span-2">
          <select {...register("service")} className="input" defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Message" error={errors.message?.message} className="sm:col-span-2">
          <textarea
            {...register("message")}
            rows={4}
            className="input resize-none"
            placeholder="How can we help you?"
          />
        </Field>
      </div>

      <input
        {...register("company")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">
          Something went wrong. Please try again or contact us on WhatsApp.
        </p>
      )}

      <Button
        type="submit"
        className="mt-5 w-full sm:w-auto"
        disabled={status === "loading"}
        icon={status === "loading" ? <Loader2 className="animate-spin" size={18} /> : undefined}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: #1f2937;
          outline: none;
        }
        .input:focus {
          border-color: #0f6b4b;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-xs font-medium text-gray-500 ${className}`}>
      {label}
      {children}
      {error && <span className="text-xs font-normal text-red-600">{error}</span>}
    </label>
  );
}
