import React, { useEffect, useState } from "react";

const FloatingCTA = ({ onApplyClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const finalCTA = document.getElementById("final-cta");

    const observer = new IntersectionObserver(
      (entries) => {
        const isHeroVisible = entries.find(
          (entry) => entry.target.id === "hero"
        )?.isIntersecting;

        const isFinalVisible = entries.find(
          (entry) => entry.target.id === "final-cta"
        )?.isIntersecting;

        if (isHeroVisible || isFinalVisible) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (hero) observer.observe(hero);
    if (finalCTA) observer.observe(finalCTA);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 pb-6">
      <button onClick={onApplyClick}
          className="w-full bg-lime-400 text-black font-bold text-xl py-5 rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.6)] hover:scale-[1.02] active:scale-[0.98] transition duration-300"
        >
          Apply Now →
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;