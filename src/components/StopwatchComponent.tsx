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
  return (
    <div className="flex flex-col mx-auto h-11/12 items-center justify-center dark:text-dark-white">
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
      </div>
    </div>
  );
};

export default StopwatchComponent;
