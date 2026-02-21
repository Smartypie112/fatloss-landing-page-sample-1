import { useEffect, useState, useRef } from "react";

const ExitIntent = () => {
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (sessionStorage.getItem("exitIntentShown")) return;

    const triggerExit = () => {
      if (!sessionStorage.getItem("exitIntentShown")) {
        setShow(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const scrollPercent = (scrollTop + windowHeight) / fullHeight;

      // If user saw 70% of page
      if (scrollPercent > 0.7) {
        // And scrolls up fast
        if (lastScrollY.current - scrollTop > 80) {
          triggerExit();
        }
      }

      lastScrollY.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStay = () => {
    setShow(false);
    const testimonials = document.getElementById("testimonials");
    testimonials?.scrollIntoView({ behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">
      <div className="bg-zinc-900 p-8 rounded-2xl text-center max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4">
          Wait! Don't Leave Yet 🚀
        </h3>

        <p className="text-gray-400 mb-6">
          See what others are saying before you go.
        </p>

        <button
          onClick={handleStay}
          className="bg-lime-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-400 transition w-full"
        >
          Show Testimonials
        </button>
      </div>
    </div>
  );
};

export default ExitIntent;