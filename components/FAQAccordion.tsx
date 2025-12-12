"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

export default function FAQAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const open = index === openIndex;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-lg border bg-white"
          >
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-primary"
              onClick={() => setOpenIndex(open ? null : index)}
              type="button"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{open ? "−" : "+"}</span>
            </button>
            {open && (
              <div className="border-t px-4 py-3 text-sm text-secondary">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
