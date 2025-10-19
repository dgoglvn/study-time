import { formatHMMSS } from "../helpers/formatTime";

interface ChildProps {
  time: number;
  isRunning: boolean;
  handleStart: () => void;
  handleStop: () => void;
}

const StopwatchComponent = ({
  time,
  isRunning,
  handleStart,
  handleStop,
}: ChildProps) => {
  // const savedFormattedTime = localStorage.getItem("timeStr") || null;
  // const savedCount = Number(localStorage.getItem("count") || null);

  return (
    <div className="flex flex-col mx-auto h-11/12 items-center justify-center dark:text-dark-white">
      <p className="text-centert tabular-nums lining-nums tracking-tight text-[clamp(6rem,20vw,30rem)] font-medium dark:text-dark-white fixed-width-digits">
        {/* {savedCount !== 0 ? savedFormattedTime : formatHMMSS(time)} */}
        {formatHMMSS(time)}
      </p>
      <div className="flex items-center mx-auto">
        <button
          type="button"
          className={
            isRunning
              ? "text-white px-6 py-3 sm:px-8 sm:py-4 sm:h-14 min-w-[9rem] text-[clamp(1rem,4vw,1.25rem)] bg-blue-600 hover:bg-blue-700 font-semibold tracking-tight rounded-lg dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-dark-white focus:outline-none cursor-pointer stopwatch-btn active"
              : "text-white px-6 py-3 sm:px-8 sm:py-4 sm:h-14 min-w-[9rem] text-[clamp(1rem,4vw,1.25rem)] bg-blue-600 hover:bg-blue-700 font-semibold tracking-tight rounded-lg dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-dark-white focus:outline-none cursor-pointer stopwatch-btn"
          }
          // className="text-white px-6 py-3 sm:px-8 sm:py-4 sm:h-14 min-w-[9rem] text-[clamp(1rem,4vw,1.25rem)] bg-blue-600 hover:bg-blue-700 font-semibold tracking-tight rounded-2xl dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-dark-white focus:outline-none active:scale-[.98] cursor-pointer stopwatch-btn"
          onClick={() => {
            if (isRunning) handleStop();
            else handleStart();
          }}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default StopwatchComponent;
