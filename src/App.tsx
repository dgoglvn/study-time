import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import Stopwatch from "./components/Time";

function App() {
  const [totalTime, setTotalTime] = useState<number>(0);

  const handleTotalTime = () => setTotalTime((c) => c + 1);

  const resetTime = (x: boolean) => {
    if (x) {
      console.log("true");
      setTotalTime(0);
    }
  };

  return (
    <div className="app h-screen dark:bg-neutral-900 select-none">
      <DarkModeToggle totalTime={totalTime} resetTime={resetTime} />
      <Stopwatch handleTotalTime={handleTotalTime} />
    </div>
  );
}

export default App;
