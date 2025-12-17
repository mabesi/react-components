import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import './CodeBlock.css';

export interface CodeBlockProps {
    code: string;
    language?: 'tsx' | 'jsx' | 'typescript' | 'javascript';
    showLineNumbers?: boolean;
    title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language = 'tsx',
    showLineNumbers = false,
    title = 'Example Code',
}) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    const lines = code.split('\n');

    return (
        <div className="code-block-container">
            {title && (
                <div className="code-block-title">
                    {title}
                </div>
            )}
            <div className="code-block-header">
                <span className="code-block-language">{language}</span>
                <button
                    className="copy-button"
                    onClick={handleCopy}
                    aria-label="Copy code to clipboard"
                >
                    {copied ? (
                        <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>
            <div className="code-block-content">
                <pre>
                    <code className={`language-${language}`}>
                        {showLineNumbers ? (
                            lines.map((line, index) => (
                                <div key={index} className="code-line">
                                    <span className="line-number">{index + 1}</span>
                                    <span className="line-content">{line}</span>
                                </div>
                            ))
                        ) : (
                            code
                        )}
                    </code>
                </pre>
            </div>
        </div>
    );
};
