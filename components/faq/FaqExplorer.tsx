"use client";

import { useMemo, useState } from "react";
import { Search, Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faq-data";

const categories = [
  "All",
  "General",
  "Hajj",
  "Umrah",
  "Visa",
  "Payments",
  "Flights",
  "Hotels",
] as const;

export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const matchesQuery =
        query.trim() === "" ||
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="relative mx-auto max-w-xl">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a question..."
          className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-[#1f2937] outline-none focus:border-brand-green"
        />
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
              category === cat
                ? "bg-brand-green text-white"
                : "bg-white text-gray-600 ring-1 ring-gray-200 hover:text-brand-green"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {filtered.length === 0 ? (
          <p className="py-10 text-center text-sm text-gray-500">
            No questions found. Try a different search term.
          </p>
        ) : (
          filtered.map((faq, i) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-[#1f2937] sm:text-base">
                  {faq.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <p className="px-5 pb-4 text-sm leading-6 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
