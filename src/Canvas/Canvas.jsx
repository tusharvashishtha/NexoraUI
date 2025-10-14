// Canvas.jsx
import React from "react";
import CodeBox from "../Components/CodeBox"; 
import TextTrail, {
  TextRailString,
  TextTrailDependency,
  TextTrailName,
} from "../Animations/TextAnimations/TextTrail/TextTrail";

const Canvas = ({ component }) => {
  return (
    <div className="w-full h-fit bg-transparent p-10 flex flex-col gap-8 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col font-semibold h-fit p-5 w-full items-start">
        <div className="flex items-center justify-center text-4xl font-bold text-zinc-400 h-10 w-fit hover:cursor-pointer">
          {TextTrailName}
        </div>

        {/* Live component preview */}
        <div className="h-[80vh] w-full bg-[#05060A] border-2 border-zinc-400 rounded-xl flex items-center justify-center">
          {component}
        </div>
      </div>

      {/* Small Dependency Box */}
      <div className="w-full">
        <h3 className="text-white mb-2">Dependencies:</h3>
        <CodeBox codeString={TextTrailDependency} language="bash" maxHeight="fit-content" />
      </div>

      {/* Main CodeBox */}
      <div className="w-full">
        <h3 className="text-white mb-2">Code:</h3>
        <CodeBox codeString={TextRailString} language="jsx" maxHeight="fit-content" />
      </div>
    </div>
  );
};

export default Canvas;
