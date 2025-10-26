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
    <div className="flex flex-1 flex-col items-center justify-center gap-4 dark:bg-neutral-900 dark:text-dark-white home-main">
      <h1 className="text-8xl">Study Time</h1>
      <p className="text-xl">
        <TypewriterComponent
          options={{ strings: subjects, autoStart: true, loop: true }}
        />
      </p>
      <div />
    </div>
  );
};

export default Home;
