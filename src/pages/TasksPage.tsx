import { useState } from "react";

const TasksPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState([]);
  const today = new Date().toLocaleDateString();

  const handleChange = (e): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e): void => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <div className="min-h-dvh bg-gradient-to-b from-indigo-100 to-zinc-50">
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
              onSubmit={handleSubmit}
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
            <ul className="grid gap-2">
              {/* example task item (will be replaced with *real* mapped items */}
              <li className="group relative overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl px-4 py-3">
                <p className="text-[15px] leading-snug text-slate-900 dark:text-slate-100">
                  Sleep at least 7 hours
                </p>
              </li>
            </ul>

            <ul className="grid gap-2">
              {/* example task item (will be replaced with *real* mapped items */}
              <li className="group relative overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl px-4 py-3">
                <p>Sleep at least 7 hours</p>
              </li>
            </ul>

            {/* empty state (show when no tasks) */}
            <div className="hidden items-center justify-center py-16 text-center text-slate-600 dark:text-slate-400">
              <div>
                <p className="mt-4 text-sm">
                  No tasks yet - add your first one above.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TasksPage;
