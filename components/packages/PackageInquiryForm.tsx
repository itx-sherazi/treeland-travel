"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.email("Enter a valid email").optional().or(z.literal("")),
  travelers: z.string().min(1, "Number of travelers is required"),
  message: z.string().optional(),
  // honeypot
  company: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export default function PackageInquiryForm({ packageName }: { packageName: string }) {
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
        body: JSON.stringify({
          ...data,
          service: `Package Inquiry — ${packageName}`,
        }),
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
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="text-brand-green" size={32} />
        <p className="font-semibold text-[#1f2937]">Inquiry sent successfully!</p>
        <p className="text-sm text-gray-600">
          Our team will contact you shortly regarding {packageName}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-heading text-lg font-bold text-[#1f2937]">
        Inquire About This Package
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} className="input" placeholder="Your name" />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} className="input" placeholder="03XX-XXXXXXX" />
        </Field>
        <Field label="Email (optional)" error={errors.email?.message}>
          <input {...register("email")} className="input" placeholder="you@example.com" />
        </Field>
        <Field label="Number of Travelers" error={errors.travelers?.message}>
          <input {...register("travelers")} className="input" placeholder="e.g. 2" />
        </Field>
      </div>
      <Field label="Message (optional)" error={errors.message?.message} className="mt-4">
        <textarea
          {...register("message")}
          rows={3}
          className="input resize-none"
          placeholder="Any specific requirements?"
        />
      </Field>
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
        className="mt-5 w-full"
        disabled={status === "loading"}
        icon={status === "loading" ? <Loader2 className="animate-spin" size={18} /> : undefined}
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
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
