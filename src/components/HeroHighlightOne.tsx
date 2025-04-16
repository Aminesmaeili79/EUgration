"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightOne() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center "
      >
        With EUgration, you can find, apply, and get sponsorship
        <br />
        <Highlight className="text-black dark:text-white">
          in your desired company across the Spain.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
