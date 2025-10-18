interface ChildProps {
  handleReset: () => void;
}

const EndSession = ({ handleReset }: ChildProps) => {
  const handleEndSessionPopup = (): void => {
    const result: boolean = confirm("End the session?");

    if (result) handleReset();
    else return;
  };

  return (
    <>
      <button
        className="w-8 h-8 rounded-full bg-neutral-300 cursor-pointer"
        onClick={handleEndSessionPopup}
      >
        X
      </button>
    </>
  );
};

export default EndSession;
