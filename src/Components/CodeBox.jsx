import React, { useState, useContext } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl"; // dark mode
import github from "prism-react-renderer/themes/github";     // light mode

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

    const theme = darkMode ? nightOwl : github;

    return (
        <div
            className={`relative rounded-xl shadow-lg border px-1 border-zinc-800 ${darkMode ? "bg-[#0d1117]" : "bg-[#f9fafb]"
                }`}>
            {/* Copy button */}
            <button
                onClick={handleCopy}
                className={`absolute top-3 right-3 px-3 py-1 text-sm rounded-md flex items-center gap-1 transition-all z-10 ${darkMode
                    ? "bg-zinc-800 text-white hover:bg-zinc-700"
                    : "bg-zinc-200 text-zinc-900 hover:bg-zinc-300"
                    }`}>
                <Copy size={14} /> {copied ? "Copied!" : "Copy"}
            </button>
            {/* Code Block */}
            <div
                style={{ maxHeight }}
                className="overflow-auto rounded-xl scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                <Highlight
                    {...defaultProps}
                    code={codeString.trim()}
                    language={language}
                    theme={theme}>
                    {({ style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            style={{
                                ...style,
                                background: darkMode ? "#0d1117" : "#f9fafb", // force match with wrapper
                                padding: "1.5rem",
                                fontSize: "0.9rem",
                                lineHeight: "1.6",
                                fontFamily: "monospace",
                                margin: 0,
                            }}>
                            {tokens.map((line, i) => {
                                const { key: lineKey, ...lineProps } = getLineProps({ line });
                                return (
                                    <div key={i} {...lineProps} style={{ display: "flex" }}>
                                        <span
                                            style={{
                                                display: "inline-block",
                                                width: "2em",
                                                textAlign: "right",
                                                opacity: 0.4,
                                                paddingRight: "1em",
                                                userSelect: "none",
                                                fontStyle: "normal",
                                            }}
                                        >
                                            {i + 1}
                                        </span>
                                        <span>
                                            {line.map((token, idx) => {
                                                const { key: tokenKey, ...tokenProps } = getTokenProps({ token });
                                                return <span key={idx} {...tokenProps} />;
                                            })}
                                        </span>
                                    </div>
                                );
                            })}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

export default CodeBox;
