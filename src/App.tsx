import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import Stopwatch from "./components/StopwatchComponent";

function App() {
  const [totalTime, setTotalTime] = useState<number>(0);

  const resetTime = (x: boolean) => {
    if (x) {
      console.log("true");
      setTotalTime(0);
    }
  };

  return (
    <div className="app h-screen dark:bg-neutral-900 select-none">
      <DarkModeToggle totalTime={totalTime} resetTime={resetTime} />
      <Stopwatch />
    </div>
  );
}

export default App;
