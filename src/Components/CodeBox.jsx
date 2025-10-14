import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";

const CodeBox = ({ codeString, language = "jsx", maxHeight = "600px" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#0d1117] text-white rounded-xl shadow-lg border border-zinc-800">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1 text-sm rounded-md flex items-center gap-1 transition-all z-10"
      >
        <Copy size={14} /> {copied ? "Copied!" : "Copy"}
      </button>

      {/* Syntax highlighted code */}
      <div
        style={{ maxHeight }}
        className="overflow-auto rounded-b-xl"
      >
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
            padding: "1.5rem",
            fontSize: "0.9rem",
            lineHeight: "1.5",
          }}
        >
          {codeString.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBox;
