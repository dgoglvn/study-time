import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { Stopwatch } from "./classes/Stopwatch";
import { Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";

import { formatHMMSS } from "./helpers/formatTime";
import TopBar from "./components/TobBar";
import StopwatchPage from "./pages/StopwatchPage";
import ProgressPage from "./pages/ProgressPage";

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
    <div className="app h-screen flex flex-col font-geist-mono  select-none bg-gradient-to-b from-blue-50 to-neutral-50 dark:bg-none dark:bg-neutral-900">
      <TopBar time={time} handleReset={handleReset} />
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route
          path="/stopwatch"
          element={
            <StopwatchPage
              time={time}
              isRunning={isRunning}
              handleStart={handleStart}
              handleStop={handleStop}
            />
          }
        />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
    </div>
  );
}

export default App;
