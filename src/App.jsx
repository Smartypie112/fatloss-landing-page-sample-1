import React, { useState } from "react";
import Hero from "./components/Hero";
import Results from "./components/Results";
import FloatingCTA from "./components/FloatingCTA";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Unsure from "./components/Unsure";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import ExitIntent from "./components/ExitIntent";
import Apply from "./components/Apply";

function App() {
  const [showApply, setShowApply] = useState(false);

  if (showApply) {
    return <Apply />;
  }

  return (
    <>
      <ExitIntent />
      <Hero onApplyClick={() => setShowApply(true)} />
      <Results />
      <FloatingCTA onApplyClick={() => setShowApply(true)} />
      <Problems />
      <Solutions />
      <Testimonials />
      <Unsure />
      <FinalCTA onApplyClick={() => setShowApply(true)} />
    </>
  );
}

export default App;