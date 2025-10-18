import { useState, useRef, useEffect } from "react";
import { Stopwatch } from "../classes/Stopwatch";

const formatHMMSS = (time: number): string => {
  const hours = Math.trunc(time / 3600);
  const seconds = (time % 3600) % 60;
  const minutes = Math.trunc((time % 3600) / 60);

  let timeString: string;
  const minutesStr: string = minutes.toString().padStart(2, "0");
  const secondsStr: string = seconds.toString().padStart(2, "0");

  if (hours > 0) {
    timeString = `${hours}:${minutesStr}:${secondsStr}`;
  } else {
    timeString = `${minutesStr}:${secondsStr}`;
  }

  return timeString;
};

const Time = () => {
  const stopwatchRef = useRef<Stopwatch>(new Stopwatch());

  const [time, setTime] = useState<number>(stopwatchRef.current.value);
  const [isRunning, setIsRunning] = useState<boolean>(
    stopwatchRef.current.isRunning
  );

  useEffect(() => {
    const sw = stopwatchRef.current!;
    const unsubscribe = sw.subscribe(setTime);

    return () => {
      unsubscribe();
      sw.stop();
    };
  }, []);

  const handleStart = () => {
    stopwatchRef.current!.start();
    setIsRunning(stopwatchRef.current.isRunning);
  };

  const handleStop = () => {
    stopwatchRef.current!.stop();
    setIsRunning(stopwatchRef.current.isRunning);
  };

  const handleReset = () => stopwatchRef.current!.reset();

  return (
    <div className="flex flex-col mx-auto dark:text-dark-white">
      <div className="flex flex-row mx-auto">
        {/* {hours > 0 ? (
          <>
            <span>
              <p className="text-[26rem] font-medium dark:text-dark-white fixed-width-digits">
                {hours}
              </p>
            </span>
            <p className="text-[26rem] dark:text-white">:</p>
          </>
        ) : (
          <></>
        )}
        <span>
          <p className="text-[26rem] font-medium dark:text-dark-white fixed-width-digits">
            {minutes < 10 ? `0${minutes}` : minutes}
          </p>
        </span>
        <p className="text-[26rem] dark:text-white">:</p>
        <span>
          <p className="text-[26rem] font-medium dark:text-dark-white fixed-width-digits">
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </span> */}
      </div>

      <p className="text-center text-[22rem] font-semibold dark:text-dark-white fixed-width-digits">
        {formatHMMSS(time)}
      </p>
      <div className="flex items-center mx-auto">
        <button
          type="button"
          className="text-white w-38 p-3 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-4xl me-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-dark-white focus:outline-none cursor-pointer"
          onClick={() => {
            if (isRunning) handleStop();
            else handleStart();
          }}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        {/* <button
          type="button"
          className="text-white w-38 p-3 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-4xl me-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-dark-white focus:outline-none cursor-pointer"
          onClick={restart}
        >
          Restart
        </button> */}
      </div>
    </div>
  );
};

export default Time;
