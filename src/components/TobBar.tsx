import DarkModeToggle from "./DarkModeToggle";
import NavBar from "./NavBar";
import EndSession from "./EndSession";

interface ChildProps {
  time: number;
  handleReset: () => void;
}

const TopBar = ({ time, handleReset }: ChildProps) => {
  return (
    <div className="relative flex items-center justify-between">
      <DarkModeToggle />
      <NavBar />
      {time > 0 ? <EndSession time={time} handleReset={handleReset} /> : <></>}
    </div>
  );
};

export default TopBar;
