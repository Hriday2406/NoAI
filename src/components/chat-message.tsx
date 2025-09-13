"use client";

import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-3 shadow-sm",
          isUser
            ? "bg-primary text-primary-foreground ml-12"
            : "bg-card text-card-foreground mr-12"
        )}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed">{message}</p>
        ) : (
          <div className="text-sm leading-relaxed prose prose-sm max-w-none">
            <ReactMarkdown
              components={{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark as any}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-md text-xs text-foreground"
                      customStyle={{
                        backgroundColor: "#1d1d1d",
                        color: "#e7e7e7",
                        border: "1px solid #555",
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className="bg-muted px-1 py-0.5 rounded text-xs font-mono text-foreground"
                      style={{
                        backgroundColor: "#1d1d1d",
                        color: "#e7e7e7",
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                p: ({ children }: any) => (
                  <p className="mb-2 last:mb-0">{children}</p>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ul: ({ children }: any) => (
                  <ul className="list-disc list-inside mb-2 space-y-1">
                    {children}
                  </ul>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ol: ({ children }: any) => (
                  <ol className="list-decimal list-inside mb-2 space-y-1">
                    {children}
                  </ol>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                strong: ({ children }: any) => (
                  <strong className="font-semibold">{children}</strong>
                ),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                em: ({ children }: any) => (
                  <em className="italic">{children}</em>
                ),
              }}
            >
              {message}
            </ReactMarkdown>
          </div>
        )}
        {timestamp && (
          <div
            className={cn(
              "text-xs mt-2 opacity-70",
              isUser ? "text-primary-foreground" : "text-muted-foreground"
            )}
          >
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
}
