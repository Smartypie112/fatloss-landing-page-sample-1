import React from "react";
import { CheckCircle } from "lucide-react";

const Solutions = () => {
  return (
    <section className="bg-black text-white py-5 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="space-y-6">

          {/* Box 1 */}
          <div className="bg-zinc-900 p-6 rounded-2xl flex gap-4 items-start">
            <CheckCircle className="text-lime-400 mt-1 w-10" />
            <div>
              <h4 className="text-xl font-semibold">Structured Plans</h4>
              <p className="text-gray-400 mt-1">
                Clear, step-by-step system designed for steady and predictable fat loss.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-zinc-900 p-6 rounded-2xl flex gap-4 items-start">
            <CheckCircle className="text-lime-400 mt-1 w-10" />
            <div>
              <h4 className="text-xl font-semibold">Sustainable Approach</h4>
              <p className="text-gray-400 mt-1">
                No crash diets or extremes — just practical habits that last long-term.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-zinc-900 p-6 rounded-2xl flex gap-4 items-start">
            <CheckCircle className="text-lime-400 mt-1 w-10" />
            <div>
              <h4 className="text-xl font-semibold">Full Accountability</h4>
              <p className="text-gray-400 mt-1">
                Ongoing support and tracking so you stay consistent and never fall off track.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Solutions;