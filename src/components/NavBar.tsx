import { House, ListTodo, Timer, TrendingUp } from "lucide-react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="absolute left-1/2 transform -translate-x-1/2 flex justify-between px-8 w-96 rounded-full border backdrop-blur-2xl dark:text-dark-white">
      <Link
        to="/"
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <House />
        <p>Home</p>
      </Link>
      <Link
        to="/tasks"
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <ListTodo />
        <p>Tasks</p>
      </Link>
      <Link
        to="/stopwatch"
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <Timer />
        <p>Study</p>
      </Link>
      <Link
        to="/progress"
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <TrendingUp />
        <p>Progress</p>
      </Link>
    </nav>
  );
};

export default NavBar;
