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
    <div className="flex flex-col mx-auto dark:text-dark-white">
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

export default StopwatchComponent;
