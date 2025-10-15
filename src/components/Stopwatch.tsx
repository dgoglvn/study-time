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
    <div className="flex flex-col mx-auto">
      <div className="flex flex-row mx-auto">
        <span>
          <p className="text-[30rem] fixed-width-digits">
            {minutes < 10 ? `0${minutes}` : minutes}
          </p>
        </span>
        <p className="text-[30rem]">:</p>
        <span>
          <p className="text-[30rem] fixed-width-digits">
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </span>
      </div>
      <div className="flex items-center mx-auto">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-4xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-4xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
          onClick={restart}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
