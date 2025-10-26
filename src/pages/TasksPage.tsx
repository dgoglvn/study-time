import {type ChangeEvent, useState} from "react";
import {Task} from "../classes/Task.ts";
import TaskItem from "../components/TaskItem.tsx";

const TasksPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const addTask = (event: { preventDefault: () => void; }): void => {
      event.preventDefault();
      if (inputValue.trim() === "") return; // prevent adding empty items
      setTasks([...tasks, new Task(inputValue, false)]);
      setInputValue("");
  }

  return (
    <div className="flex-1">
      {/* subtle glassy overlay*/}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* header */}
        <header className="mb-8 flex items-center justify between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              Thursday 23rd, October
            </h1>
          </div>
        </header>

        {/* glass panel */}
        <section className="relative rounded-3xl border border-white/25 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(2,6,23,0.25)] ring-1 ring-slate-900/5">
          <div className="relative p-5 sm:p-6">
            <form
              className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:gap-4"
              onSubmit={addTask}
            >
              <label htmlFor="task" className="sr-only">
                Task name
              </label>
              <input
                id="task"
                name="task"
                type="text"
                placeholder="Add new task"
                autoComplete="off"
                className="w-full rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md px-4 py-3 text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 border border-white/40 dark:border-white/10"
                value={inputValue}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 sm:px-5 py-3 text-sm font-semibold tracking-tight text-white bg-gradient-to-b from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-900 active:scale-[.99] transition shadow-lg shadow-slate-900/20 ring-1 ring-slate-900/10 cursor-pointer"
              >
                Add Task
              </button>
            </form>
          </div>

          {/* tasks container */}
          <div className="p-4 sm:p-6">
              {tasks.length === 0 ? (
                  <div className="items-center justify-center py-16 text-center text-slate-600 dark:text-slate-400">
                      <div>
                          <p className="mt-4 text-sm">
                              No tasks yet - add your first one above.
                          </p>
                      </div>
                  </div>
              ) : (
                  <ul className="grid gap-2">
                      {tasks.map((task: Task) => (
                          <TaskItem key={task.id} text={task.text} completed={task.completed} />
                      ))}
                  </ul>
              )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TasksPage;
