"use client";

import { useEffect, useState } from "react";

interface FlipCharacterProps {
  char: string;
  delay: number;
}

const FlipCharacter = ({ char, delay }: FlipCharacterProps) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [randomChar, setRandomChar] = useState(char);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

  useEffect(() => {
    // Start flipping only after component mounts
    setIsFlipping(true);

    const flipInterval = setInterval(() => {
      if (isFlipping) {
        setRandomChar(chars[Math.floor(Math.random() * chars.length)]);
      }
    }, 50);

    const stopFlipping = setTimeout(() => {
      setIsFlipping(false);
      clearInterval(flipInterval);
    }, delay);

    return () => {
      clearInterval(flipInterval);
      clearTimeout(stopFlipping);
    };
  }, [delay]);

  return (
    <span
      className={`inline-block w-[1ch] font-mono transition-transform ${
        isFlipping ? "animate-flipChar" : ""
      } bg-black/40 px-[2px] rounded-sm`}
    >
      {isFlipping ? randomChar : char}
    </span>
  );
};

interface FlipBoardProps {
  messages: string[];
  interval?: number;
  className?: string;
}

export function FlipBoard({
  messages,
  interval = 3000,
  className = "",
}: FlipBoardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(messages[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [messages.length, interval]);

  useEffect(() => {
    setDisplayText(messages[currentIndex]);
  }, [currentIndex, messages]);

  // Return null or a loading state until client-side hydration is complete
  if (!isClient) {
    return <div className={`font-mono ${className}`}>{messages[0]}</div>;
  }

  return (
    <div className={`font-mono ${className} flex flex-wrap gap-[2px]`}>
      {displayText.split("").map((char, idx) => (
        <FlipCharacter
          key={`${idx}-${currentIndex}`}
          char={char}
          delay={idx * 50 + 500}
        />
      ))}
    </div>
  );
}
