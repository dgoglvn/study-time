import { Link } from "react-router";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  const subjects = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Philosophy",
    "History",
    "Business",
    "Biology",
    "Economics",
  ];
  return (
    <div>
      <div></div>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-8xl">Study Time</h1>
        <p className="text-xl">
          <TypewriterComponent
            options={{ strings: subjects, autoStart: true, loop: true }}
          />
        </p>
        <Link to={{ pathname: "/stopwatch" }}>
          <button className="text-white px-6 py-3 sm:px-8 sm:py-4 sm:h-14 min-w-[9rem] text-[clamp(1rem,4vw,1.25rem)] bg-blue-600 hover:bg-blue-700 font-semibold tracking-tight rounded-lg dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-dark-white focus:outline-none cursor-pointer">
            ENTER
          </button>
        </Link>
        <div />
      </div>
    </div>
  );
};

export default Home;
