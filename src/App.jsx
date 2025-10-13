import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import TextTrail from "./Animations/TextAnimations/TextTrail";
import Canvas from "./Canvas/Canvas";

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className=" px-2 py-4 min-h-screen flex flex-col items-end justify-start transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors duration-300"
      >
        {darkMode ? <i class="ri-sun-fill"></i>  : <i class="ri-moon-fill"></i>}
      </button>

      <div className="w-[80vw] h-fit">
      <Canvas />

      </div>
    </div>
  );
}

export default App;
