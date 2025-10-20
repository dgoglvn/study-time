import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import DarkModeToggle from "./components/DarkModeToggle";
import StopwatchComponent from "./components/StopwatchComponent";
import { Stopwatch } from "./classes/Stopwatch";

import { formatHMMSS } from "./helpers/formatTime";

function App() {
  const stopwatchRef = useRef<Stopwatch>(new Stopwatch());

  const [time, setTime] = useState<number>(stopwatchRef.current.count);
  const [isRunning, setIsRunning] = useState<boolean>(
    stopwatchRef.current.isRunning,
  );

  useEffect(() => {
    const sw = stopwatchRef.current!;
    const unsubscribe = sw.subscribe(setTime);

    return () => {
      unsubscribe();
      sw.stop();
    };
  }, []);

  useEffect(() => {
    if (time > 0) {
      document.title = formatHMMSS(time);
    } else {
      document.title = "Study Time";
    }
  });

  const handleStart = (): void => {
    stopwatchRef.current!.start();
    setIsRunning(stopwatchRef.current.isRunning);
  };

  const handleStop = (): void => {
    stopwatchRef.current!.stop();
    setIsRunning(stopwatchRef.current.isRunning);
  };

  const handleReset = (): void => {
    stopwatchRef.current.reset();
    setTime(0);
    setIsRunning(false);
    notifyTotalTime();
  };

  const notifyTotalTime = () =>
    toast(`Your time spent studying: ${formatHMMSS(time)}`);

  return (
    <div className="app h-screen font-geist-mono dark:bg-neutral-900 select-none">
      <DarkModeToggle time={time} handleReset={handleReset} />
      <StopwatchComponent
        time={time}
        isRunning={isRunning}
        handleStart={handleStart}
        handleStop={handleStop}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={localStorage.getItem("theme") === "light" ? "light" : "dark"}
        transition={Bounce}
      />
    </div>
  );
}

export default App;
