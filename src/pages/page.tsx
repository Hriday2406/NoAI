import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "@/components/chat-message";
import { ChatInput } from "@/components/chat-input";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content:
      "Hello! Welcome to **NoAI**. I'm here to help you with any questions you might have. How can I assist you today?",
    isUser: false,
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    content:
      "Hi there! Can you help me understand how to use markdown formatting in messages?",
    isUser: true,
    timestamp: "10:31 AM",
  },
  {
    id: "3",
    content: `Here are some common markdown formatting options you can use:

**Bold text** - Use double asterisks: \`**bold**\`
*Italic text* - Use single asterisks: \`*italic*\`

You can also create lists:
- Bullet point 1
- Bullet point 2
- Bullet point 3

And even code blocks:
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

Feel free to try any of these formatting options in your messages!`,
    isUser: false,
    timestamp: "10:31 AM",
  },
  {
    id: "4",
    content:
      "That's really helpful! The interface looks very clean and modern.",
    isUser: true,
    timestamp: "10:32 AM",
  },
  {
    id: "5",
    content:
      "Thank you! The interface is designed to be minimalistic and user-friendly, similar to ChatGPT but with our own clean aesthetic. Is there anything specific you'd like to know about or discuss?",
    isUser: false,
    timestamp: "10:32 AM",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Thank you for your message: "${content}". This is a demo response from **NoAI**. 

In a real implementation, this would connect to an AI service to provide intelligent responses. The interface supports:

- **Markdown formatting** for rich text
- Code syntax highlighting
- Smooth scrolling
- Auto-expanding input
- Clean, minimalistic design

Feel free to continue the conversation!`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground text-balance">
            NoAI
          </h1>
          <p className="text-sm text-muted-foreground">
            Minimalistic Chat Interface
          </p>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-card text-card-foreground rounded-lg px-4 py-3 shadow-sm mr-12">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    NoAI is typing...
                  </span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
}
