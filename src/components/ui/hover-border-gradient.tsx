"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Changed from motion/react
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

interface HoverBorderGradientProps<T extends React.ElementType = "button"> {
    children: React.ReactNode;
    containerClassName?: string;
    className?: string;
    as?: T;
    duration?: number;
    clockwise?: boolean;
}

type HoverBorderGradientComponentProps<T extends React.ElementType> =
    HoverBorderGradientProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof HoverBorderGradientProps<T>>;

export function HoverBorderGradient<T extends React.ElementType = "button">({
                                                                                children,
                                                                                containerClassName,
                                                                                className,
                                                                                as,
                                                                                duration = 1,
                                                                                clockwise = true,
                                                                                ...props
                                                                            }: HoverBorderGradientComponentProps<T>) {
    const [hovered, setHovered] = useState<boolean>(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    const Component = as || "button";

    const rotateDirection = (currentDirection: Direction): Direction => {
        const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise
            ? (currentIndex - 1 + directions.length) % directions.length
            : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };

    const movingMap: Record<Direction, string> = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM:
            "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT:
            "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    };

    const highlight =
        "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration, clockwise]);

    // Render with the createElement pattern instead of JSX
    return React.createElement(
        Component,
        {
            onMouseEnter: () => setHovered(true),
            onMouseLeave: () => setHovered(false),
            className: cn(
                "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
                containerClassName
            ),
            ...props
        },
        [
            // Child 1: Content
            React.createElement(
                "div",
                {
                    key: "content",
                    className: cn(
                        "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
                        className
                    )
                },
                children
            ),
            // Child 2: Motion div
            React.createElement(
                motion.div,
                {
                    key: "motion",
                    className: cn(
                        "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                    ),
                    style: {
                        filter: "blur(2px)",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    },
                    initial: { background: movingMap[direction] },
                    animate: {
                        background: hovered
                            ? [movingMap[direction], highlight]
                            : movingMap[direction],
                    },
                    transition: { ease: "linear", duration }
                }
            ),
            // Child 3: Background div
            React.createElement(
                "div",
                {
                    key: "background",
                    className: "bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]"
                }
            )
        ]
    );
}