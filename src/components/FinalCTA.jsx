import React from "react";
import { ShieldCheck } from "lucide-react";

const FinalCTA = ({ onApplyClick }) => {
  return (
    <section id="final-cta" className="bg-black text-white py-28 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Guarantee Card */}
        <div className="relative bg-zinc-900 border border-lime-500/30 rounded-3xl p-10 mb-24 shadow-2xl">
          
          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-3xl border border-lime-400/20 blur-xl opacity-40"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="text-lime-400" size={40} />
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
              14-DAY RISK-FREE GUARANTEE
            </h3>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              If you don't feel confident in the first two weeks, you don't pay a cent.
            </p>
          </div>
        </div>

        {/* Big Headline */}
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-16">
          STOP STARTING <br />
          <span className="text-lime-400">OVER.</span>
        </h2>

        {/* CTA Button */}
<button onClick={onApplyClick} className="bg-lime-400 text-black font-bold text-xl px-12 py-6 rounded-3xl shadow-[0_0_40px_rgba(163,230,53,0.6)] hover:scale-105 transition duration-300">
          👉 Apply to Lose 8–12 KG
        </button>

        {/* Scarcity Text */}
        <p className="text-gray-500 mt-8 text-lg">
          Limited spots for this month.
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;