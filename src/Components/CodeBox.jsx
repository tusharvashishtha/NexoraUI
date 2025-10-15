import React, { useState, useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const CodeBox = ({ codeString, language = "jsx", maxHeight = "600px" }) => {
    const [copied, setCopied] = useState(false);
    const { darkMode } = useContext(ThemeContext);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative rounded-xl shadow-lg border px-1 border-zinc-800 ${darkMode ? "bg-[#0d1117]" : "bg-[#f9fafb]"}`}>
            {/* Copy button */}
            <button
                onClick={handleCopy}
                className={`absolute top-3 right-3 px-3 py-1 text-sm rounded-md flex items-center gap-1 transition-all z-10 ${darkMode ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-200 text-zinc-900 hover:bg-zinc-300"}`}
            >
                <Copy size={14} /> {copied ? "Copied!" : "Copy"}
            </button>

            {/* Code */}
            <div
                style={{ maxHeight }}
                className="overflow-auto rounded-b-xl"
            >
                <SyntaxHighlighter
                    language={language}
                    style={darkMode ? oneDark : prism}
                    wrapLongLines={true}
                    customStyle={{
                        background: "transparent",
                        padding: "1.5rem",
                        fontSize: "0.9rem",
                        lineHeight: "1.5",
                        color: darkMode ? "#fff" : "#111827",
                    }}
                >
                    {codeString.trim()}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBox;
