import { useState, useRef, useEffect } from "react";
import { Stopwatch } from "../classes/Stopwatch";

const stopwatch = new Stopwatch(1000);

interface ChildProps {
  handleTotalTime: () => void;
}

const Time = ({ handleTotalTime }: ChildProps) => {
  // const [totalTime, setTotalTime] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const timerId = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (seconds === 60) {
      setMinutes((c) => c + 1);
      setSeconds(0);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 60) {
      setHours((c) => c + 1);
      setMinutes(0);
    }
  }, [minutes]);

  useEffect(() => {
    if (isRunning) {
      document.title = `${hours.toString()}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      document.title = "Study Time";
    }
  }, [minutes, seconds, hours, isRunning]);

  const start = () => {
    setIsRunning(true);

    if (isRunning) return;

    timerId.current = setInterval(() => {
      handleTotalTime();
      setSeconds((c) => c + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
  };

  const reset = () => {
    stop();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div className="flex flex-col mx-auto dark:text-dark-white">
      <div className="flex flex-row mx-auto">
        {hours > 0 ? (
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
