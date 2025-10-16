interface ChildProps {
  resetTime: (x: boolean) => void;
}

const EndSession = ({ resetTime }: ChildProps) => {
  const endSessionPopup = (): void => {
    const result: boolean = confirm("End the session?");

    resetTime(result);
  };

  return (
    <>
      <button
        className="w-8 h-8 rounded-full bg-neutral-300 cursor-pointer"
        onClick={endSessionPopup}
      >
        X
      </button>
    </>
  );
};

export default EndSession;
