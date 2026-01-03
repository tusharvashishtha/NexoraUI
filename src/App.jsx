import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import TextTrail from "./Animations/TextAnimations/TextTrail/TextTrail";
import Canvas from "./Canvas/Canvas";
import  Sidebar  from "./Components/Sidebar/Sidebar";

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className=" px-2 py-4 min-h-screen flex justify-center transition-colors duration-300">
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors duration-300"
      >
        {darkMode ? <i class="ri-sun-fill"></i>  : <i class="ri-moon-fill"></i>}
      </button> */}
      <div className="w-[20%] h-screen bg-amber-600 p-2">
        <Sidebar />
      </div>

      <div className="w-[80vw] h-fit">
      <Canvas component={<TextTrail text={"Nexora"} />} />
      </div>
    </div>
  );
}

export default App;
