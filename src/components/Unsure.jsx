import React, { useState } from "react";
import { X, Plus } from "lucide-react";

const faqData = [
  {
    question: "No time?",
    answer:
      "Our workouts are designed to be effective in just 30–45 minutes, perfect for busy schedules.",
  },
  {
    question: "Failed before?",
    answer:
      "We provide structured weekly coaching and accountability so you never feel lost or alone.",
  },
  {
    question: "Love food?",
    answer:
      "No food is banned. We teach you how to incorporate what you love into a healthy lifestyle.",
  },
];

const Unsure = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-16">
          STILL <span className="text-gray-400">UNSURE?</span>
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >
                <span className="text-2xl font-semibold">
                  {item.question}
                </span>

                {openIndex === index ? (
                  <X className="text-lime-400" />
                ) : (
                  <Plus className="text-lime-400" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`px-8 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 pb-8 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Unsure;