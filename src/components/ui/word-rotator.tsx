import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type WordRotatorProps = {
  words: string[];
  className?: string;
  intervalMs?: number;
};

/* Reproduces the Elementor "animated headline" rotator with a plain crossfade. */
export const WordRotator = ({ words, className, intervalMs = 2200 }: WordRotatorProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className={cn("relative inline-grid", className)}>
      {words.map((word, wordIndex) => (
        <span
          key={word}
          aria-hidden={wordIndex !== index}
          className={cn(
            "col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-700",
            wordIndex === index ? "opacity-100" : "opacity-0"
          )}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default WordRotator;
