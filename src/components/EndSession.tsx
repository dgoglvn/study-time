import { formatHMMSS } from "../helpers/formatTime";

interface ChildProps {
  time: number;
  handleReset: () => void;
}

const EndSession = ({ time, handleReset }: ChildProps) => {
  const handleEndSessionPopup = (): void => {
    const result: boolean = confirm("End the session?");

    if (result) {
      handleReset();
      console.log(`You spent ${formatHMMSS(time)} studying`);
    } else return;
  };

  return (
    <>
      <button
        className="w-7 h-8 rounded-full bg-neutral-300 cursor-pointer dark:bg-zinc-700 dark:text-white"
        onClick={handleEndSessionPopup}
      >
        X
      </button>
    </>
  );
};

export default EndSession;
