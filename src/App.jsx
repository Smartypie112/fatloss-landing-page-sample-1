import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Results from "./components/Results";
import FloatingCTA from "./components/FloatingCTA";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Unsure from "./components/Unsure";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import ExitIntent from "./components/ExitIntent";
import Navbar from "./components/Navbar";
import Apply from "./components/Apply";

function App() {
  const [showApply, setShowApply] = useState(false);
  const [triggerExitReminder, setTriggerExitReminder] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (showApply) {
        // Instead of instantly going back
        setShowApply(false);
        setTriggerExitReminder(true);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [showApply]);

  const handleApplyClick = () => {
    window.history.pushState({ apply: true }, "", "#apply");
    setShowApply(true);
  };

  if (showApply) {
  return <Apply onCloseApply={() => setShowApply(false)} />;
}

  return (
    <>
      <ExitIntent forceShow={triggerExitReminder} />
     <Navbar onApplyClick={handleApplyClick} />
      <Hero onApplyClick={handleApplyClick} />
      <Results />
      <FloatingCTA onApplyClick={handleApplyClick} />
      <Problems />
      <Solutions />
      <Testimonials />
      <Unsure />
      <FinalCTA onApplyClick={handleApplyClick} />
    </>
  );
}

export default App;