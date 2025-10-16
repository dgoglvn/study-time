import React, { useState, useRef, useEffect } from "react";

const Stopwatch: React.FC = () => {
  const [totalTime, setTotalTime] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerId = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (seconds === 60) {
      setMinutes((c) => c + 1);
      setSeconds(0);
    }
  }, [seconds]);

  useEffect(() => {
    if (isRunning) {
      document.title = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      document.title = "Study Time";
    }
  }, [minutes, seconds, isRunning]);

  const start = () => {
    setIsRunning(true);

    if (isRunning) return;

    timerId.current = setInterval(() => {
      setTotalTime((c) => c + 1);
      setSeconds((c) => c + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
  };

  const restart = () => {
    stop();
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <div className="flex flex-col mx-auto dark:text-dark-white">
      <div className="flex flex-row mx-auto">
        <span>
          <p className="text-[30rem] font-medium dark:text-dark-white fixed-width-digits">
            {minutes < 10 ? `0${minutes}` : minutes}
          </p>
        </span>
        <p className="text-[30rem] dark:text-white">:</p>
        <span>
          <p className="text-[30rem] font-medium dark:text-dark-white fixed-width-digits">
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </span>
      </div>
      <div className="flex items-center mx-auto">
        <button
          type="button"
          className="text-white w-38 p-3 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-4xl me-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-dark-white focus:outline-none cursor-pointer"
          onClick={() => {
            if (isRunning) {
              stop();
            } else {
              start();
            }
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          type="button"
          className="text-white w-38 p-3 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-4xl me-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-dark-white focus:outline-none cursor-pointer"
          onClick={restart}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
