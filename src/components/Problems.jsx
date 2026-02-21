import React from "react";
import { Flame, Zap, XCircle } from "lucide-react";

const Problems = () => {
  return (
    <section className="bg-black text-white py-2 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Method Section */}
        <div className="mb-16">
          <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
            IT WASN'T YOU. <br />
            <span className="text-gray-400">IT WAS THE METHOD.</span>
          </h3>

          <div className="space-y-6">
            <div className="bg-zinc-900 p-6 rounded-2xl flex gap-4 items-start">
              <XCircle className="text-red-500 mt-1" />
              <div>
                <h4 className="text-xl font-semibold">Random Diets</h4>
                <p className="text-gray-400 mt-1">
                  No structure leads to confusion and giving up.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl flex gap-4 items-start">
              <XCircle className="text-red-500 mt-1" />
              <div>
                <h4 className="text-xl font-semibold">Extreme Plans</h4>
                <p className="text-gray-400 mt-1">
                  Unsustainable methods cause yo-yo effects.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl flex gap-4 items-start">
              <XCircle className="text-red-500 mt-1" />
              <div>
                <h4 className="text-xl font-semibold">No Accountability</h4>
                <p className="text-gray-400 mt-1">
                  Without support, consistency is impossible.
                </p>
              </div>
            </div>
          </div>

          <p className="text-2xl font-bold mt-10 text-center font-sans">
            We fix all three.
          </p>
          <div className="w-16 h-1 bg-lime-400 mx-auto mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Problems;