import React, { useContext } from "react";
import CodeBox from "../Components/CodeBox";
import TextTrail, {
  TextRailString,
  TextTrailDependency,
  TextTrailName,
} from "../Animations/TextAnimations/TextTrail/TextTrail";
import { ThemeContext } from "../context/ThemeContext";

const Canvas = ({ component }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="w-full h-fit p-7 flex flex-col gap-8 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col font-semibold h-fit w-full items-start">
        <div
          className={`flex items-center justify-center text-4xl font-bold ${darkMode ? "text-zinc-400" : "text-zinc-900"
            } h-10 w-fit hover:cursor-pointer`}
        >
          {TextTrailName}
        </div>

        {/* Live component preview (no dark/light mode applied) */}
        <div className="h-[80vh] w-full rounded-xl flex items-center justify-center bg-[#0d1117]">
          {component}
        </div>
      </div>

      {/* Small Dependency Box */}
      <div className="w-full">
        <h3 className={`${darkMode ? "text-white" : "text-zinc-900"} mb-2`}>
          Dependencies:
        </h3>
        <CodeBox
          codeString={TextTrailDependency}
          language="bash"
          maxHeight="fit-content"
        />
      </div>

      {/* Main CodeBox */}
      <div className="w-full">
        <h3 className={`${darkMode ? "text-white" : "text-zinc-900"} mb-2`}>
          Code:
        </h3>
        <CodeBox
          codeString={TextRailString}
          language="jsx"
          maxHeight="fit-content"
        />
      </div>
    </div>
  );
};

export default Canvas;
