import StopwatchComponent from "../components/StopwatchComponent";

interface ChildProps {
  time: number;
  isRunning: boolean;
  handleStart: () => void;
  handleStop: () => void;
}

const StopwatchPage = ({
  time,
  isRunning,
  handleStart,
  handleStop,
}: ChildProps) => {
  return (
    <>
      <StopwatchComponent
        time={time}
        isRunning={isRunning}
        handleStart={handleStart}
        handleStop={handleStop}
      />
    </>
  );
};

export default StopwatchPage;
