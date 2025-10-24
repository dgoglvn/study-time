import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import TasksPage from "./pages/TasksPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/stopwatch" element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
