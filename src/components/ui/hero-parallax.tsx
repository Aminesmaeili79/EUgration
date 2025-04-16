"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeroParallax = ({ products, useCustomComponent = false }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [15, 0, 0, 15]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.2, 1, 1, 0.2]
  );
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [20, 0, 0, 20]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [-700, 0, 0, 700]
  );

  return (
    <div
      ref={ref}
      className="h-[180vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mt-20"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              useCustomComponent={useCustomComponent}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              useCustomComponent={useCustomComponent}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              useCustomComponent={useCustomComponent}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        Hear From Our Users
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        We've worked with some of the best companies in Spain, here are some of
        our case studies.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  useCustomComponent = false,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-full w-[30rem] relative flex-shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
        target="_blank"
      >
        {useCustomComponent ? (
          <div className="w-full h-full overflow-hidden rounded-xl">
            {product.customComponent}
          </div>
        ) : (
          <img
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product.title}
          />
        )}
      </a>
      {!useCustomComponent && (
        <div className="absolute inset-0 h-full w-full bg-black/60 group-hover/product:bg-black/40 transition-all duration-500"></div>
      )}
      {!useCustomComponent && (
        <div className="absolute inset-0 flex items-end p-8 text-white">
          <h2 className="font-bold text-xl group-hover/product:text-2xl transition-all duration-500">
            {product.title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};
