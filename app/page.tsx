"use client";

import { useEffect, useState } from "react";

const DESTINATIONS = [
  "Hunza Valley",
  "Skardu",
  "Murree",
  "Naran Kaghan",
  "Swat",
  "Dubai",
  "Turkey",
  "Thailand",
];

const LAUNCH_DATE = new Date("2026-09-01T00:00:00+05:00").getTime();

function useCountdown(target: number) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(target - Date.now(), 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-gradient-to-b from-sky-50 via-white to-white text-zinc-900">
      {/* Header */}
      <header className="flex w-full items-center justify-center px-4 py-6 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-base font-bold text-white sm:h-10 sm:w-10">
            ✈
          </span>
          <span className="text-lg font-bold tracking-tight text-sky-700 sm:text-xl">
            Treeland Travel
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/70 px-4 py-1.5 text-xs font-semibold text-sky-700 sm:text-sm">
          🌍 Your Journey & Tours Partner
        </span>

        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
          Your next adventure
          <span className="block text-sky-600">is about to take off</span>
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
          Treeland Travel & Tours is packing your bags. From breathtaking
          northern valleys to international getaways, we&apos;re building the
          easiest way to plan your next trip.
        </p>

        {/* Countdown */}
        <div className="mt-8 grid w-full max-w-md grid-cols-4 gap-2 sm:mt-10 sm:max-w-lg sm:gap-4">
          {[
            { label: "Days", value: days },
            { label: "Hours", value: hours },
            { label: "Mins", value: minutes },
            { label: "Secs", value: seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-xl border border-sky-100 bg-white/80 py-3 shadow-sm backdrop-blur sm:py-5"
            >
              <span className="text-xl font-extrabold tabular-nums text-sky-700 sm:text-3xl md:text-4xl">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500 sm:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full flex-1 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 sm:text-base"
          />
          <button
            type="submit"
            className="w-full shrink-0 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 sm:w-auto sm:text-base"
          >
            {submitted ? "You're in! ✓" : "Notify Me"}
          </button>
        </form>
        {submitted && (
          <p className="mt-3 text-xs font-medium text-sky-700 sm:text-sm">
            Thanks! We&apos;ll email you the moment we launch.
          </p>
        )}

        {/* Destinations */}
        <div className="mt-10 w-full max-w-3xl sm:mt-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400 sm:mb-4 sm:text-sm">
            Popular destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {DESTINATIONS.map((dest) => (
              <span
                key={dest}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm"
              >
                {dest}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex w-full flex-col items-center gap-3 px-4 py-6 text-center sm:py-8">
        <div className="flex items-center gap-4">
          {[
            { name: "Facebook", href: "#" },
            { name: "Instagram", href: "#" },
            { name: "WhatsApp", href: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-xs font-medium text-zinc-500 transition-colors hover:text-sky-600 sm:text-sm"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-[11px] text-zinc-400 sm:text-xs">
          © {new Date().getFullYear()} Treeland Travel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
