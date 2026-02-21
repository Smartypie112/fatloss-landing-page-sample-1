import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      image:
        "https://cdn.prod.website-files.com/666be273b47723af962155e4/666be273b47723af962158ad_image-mic.webp",
      quote:
        "I finally fit into my pre-pregnancy jeans! The best part is I didn’t have to give up my nightly chocolate.",
      name: "Sarah J.",
      result: "-14 KG",
      time: "Lost 14kg in 12 weeks",
    },
    {
      image:
        "https://www.cosmetic360.in/img/Why%20Women%20opt%20for%20Slimming%20Treatment.jpg",
      quote:
        "I used to think I had to do hours of cardio. Now I train 30 minutes and eat more than before!",
      name: "Michelle K.",
      result: "-9 KG",
      time: "Lost 9kg in 8 weeks",
    },
    {
      image:
        "https://cdn.prod.website-files.com/666be273b47723af962155e4/666be273b47723af962158ac_image-sg.webp",
      quote:
        "My energy is back, my confidence is back. This isn’t a diet — it’s a lifestyle.",
      name: "Emma T.",
      result: "-11 KG",
      time: "Lost 11kg in 10 weeks",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-black py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-lime-400 font-semibold">
            SUCCESS STORIES
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
            People <span className="text-lime-400">Like You.</span>
          </h2>

          <div className="w-16 h-1 bg-lime-400 mx-auto mt-6"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                {/* Result Badge */}
                <div className="absolute bottom-4 right-4 bg-lime-400 text-black font-bold px-4 py-2 rounded-xl">
                  {item.result}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-lime-400 fill-lime-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  "{item.quote}"
                </p>

                {/* Bottom */}
                <div className="mt-6">
                  <p className="font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.time}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}