import DarkModeToggle from "./components/DarkModeToggle";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="app h-screen dark:bg-neutral-900 select-none">
      <DarkModeToggle />
      <Stopwatch />
    </div>
  );
}

export default App;
