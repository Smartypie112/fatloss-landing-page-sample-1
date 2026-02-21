import React from "react";
import { Flame, Zap, XCircle } from "lucide-react";

const Results = () => {
  return (
    <section className="bg-black text-white px-6 py-20">

      {/* Heading */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          REAL RESULTS. <br /> REAL PEOPLE.
        </h2>

        <div className="w-16 h-1 bg-lime-400 mt-6"></div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-14 space-y-10">

        {/* Card 1 */}
        <div className="relative rounded-3xl overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80"
            alt="Client Result"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text Content */}
          <div className="absolute bottom-6 left-6">
            <p className="text-gray-300 text-lg">Sarah, 29</p>
            <h3 className="text-4xl font-bold mt-2">-12 KG</h3>
          </div>

          {/* Weeks Badge */}
          <div className="absolute bottom-6 right-6 bg-lime-400 text-black font-semibold px-5 py-2 rounded-xl">
            12 WEEKS
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-3xl overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
            alt="Client Result"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text Content */}
          <div className="absolute bottom-6 left-6">
            <p className="text-gray-300 text-lg">Michael, 34</p>
            <h3 className="text-4xl font-bold mt-2">-9.5 KG</h3>
          </div>

          {/* Weeks Badge */}
          <div className="absolute bottom-6 right-6 bg-lime-400 text-black font-semibold px-5 py-2 rounded-xl">
            10 WEEKS
          </div>
        </div>

      </div>
            {/* Top Stats */}
<div className="mt-16 text-center mb-24">
  {/* Headline */}
  <h2 className="text-5xl md:text-6xl font-extrabold text-gray-200 tracking-tight">
    -8 to -12 KG
  </h2>

  <p className="text-gray-500 mt-3 tracking-[0.2em] text-sm md:text-base font-extrabold">
    AVERAGE FAT LOSS
  </p>

  {/* Cards */}
  <div className="flex md:grid-cols-2 gap-4 mt-14 max-w-4xl mx-auto px-2">
    
    {/* Card 1 */}
    <div className="bg-zinc-900/80 border border-zinc-800 p-10  rounded-3xl text-center shadow-xl  transition duration-300 w-[50%] ">
      <Flame className="mx-auto text-lime-500 mb-6" size={40} />
      <p className="text-sm font-semibold text-gray-200 leading-snug">
        Visible <br /> Definition
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-zinc-900/80 border border-zinc-800 p-10 rounded-3xl text-center shadow-xl  transition duration-300 w-[50%]">
      <Zap className="mx-auto text-lime-500 mb-6" size={40} />
      <p className="text-sm font-semibold text-gray-200 leading-snug">
        More <br /> Energy
      </p>
    </div>

  </div>
</div>
    </section>
  );
};

export default Results;