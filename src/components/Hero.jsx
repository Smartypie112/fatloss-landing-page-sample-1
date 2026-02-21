import React from "react";

const Hero = ({ onApplyClick }) => {
  return (
    <section id="hero" className=" bg-black text-white flex flex-col justify-center items-center px-6 relative pt-10">

      {/* Headline */}
<div className="max-w-6xl w-full mx-auto">
  <div className="max-w-3xl ">

<h1 className="font-anton text-5xl md:text-5xl font-black leading-tight text-left tracking-tight">
  <span className ="whitespace-nowrap">
  LOSE <span className="text-lime-400">8–12 KG</span>
</span><br/> IN  12 WEEKS
</h1>

    <p className="text-gray-300 mt-6 text-xl">
      Even if nothing else worked before.
    </p>

    <div className="mt-8 max-w-md">
<button
  onClick={onApplyClick}
  className="w-full bg-lime-400 text-black font-bold text-xl py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition duration-300"
>
  👉 &nbsp; Apply Now →
</button>
    </div>

    <p className="text-gray-500 text-xs mt-6 text-center">
      No crash diets • No extreme workouts • Personalized
    </p>

  </div>
</div>

      {/* Bottom Image Card */}
      <div className="mt-16 w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
          alt="Workout"
          className="w-full h-[400px] object-cover opacity-60"
        />

        {/* Success Badge */}
        <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3">
          <div className="flex -space-x-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-8 h-8 rounded-full border-2 border-black"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-8 h-8 rounded-full border-2 border-black"
            />
            <img
              src="https://randomuser.me/api/portraits/men/12.jpg"
              className="w-8 h-8 rounded-full border-2 border-black"
            />
          </div>

          <span className="text-white font-medium">
            1,240+ Success Stories
          </span>
        </div>
      </div>

    </section>
  );
};

export default Hero;