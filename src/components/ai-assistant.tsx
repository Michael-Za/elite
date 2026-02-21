"use client";

import React, { useState, useRef, useEffect } from "react";
import { GlassCard } from "./glass-card";
import { GlassButton } from "./glass-button";
import { Input } from "./ui/input";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { aiAssistantChatbot } from "@/ai/flows/ai-assistant-chatbot-flow";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm your Elite Partners assistant. How can I help you today?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await aiAssistantChatbot({ question: userMessage });
      setMessages((prev) => [...prev, { role: "assistant", content: response.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <GlassCard className="w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl overflow-hidden animate-fade-in border-primary/20">
          <div className="p-4 border-b border-white/20 bg-primary/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-sm">Elite Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <ScrollArea className="flex-1 p-4" viewportRef={scrollRef}>
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[80%] p-3 rounded-2xl text-sm",
                      m.role === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-white/40 backdrop-blur-md rounded-tl-none border border-white/20"
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/40 backdrop-blur-md p-3 rounded-2xl rounded-tl-none border border-white/20">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="p-4 border-t border-white/20 bg-white/10 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="glass-input h-10"
            />
            <GlassButton type="submit" size="icon" className="w-10 h-10 shrink-0" disabled={isLoading}>
              <Send className="w-4 h-4" />
            </GlassButton>
          </form>
        </GlassCard>
      ) : (
        <GlassButton
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-2xl p-0 flex items-center justify-center hover:scale-110"
        >
          <MessageCircle className="w-7 h-7" />
        </GlassButton>
      )}
    </div>
  );
}