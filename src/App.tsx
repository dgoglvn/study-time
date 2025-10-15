function App() {
  return (
    <div className="flex flex-col mx-auto h-screen">
      <div className="flex flex-row mx-auto">
        <span>
          <p className="text-[30rem]">10</p>
        </span>
        <p className="text-[30rem]">:</p>
        <span className="text-[30rem]">00</span>
      </div>
      <div className="flex items-center mx-auto">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-4xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
        >
          Start
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-4xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
