"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { BackgroundGradient } from "./ui/background-gradient";

export function Testimonial() {
  // Create a modified products array that includes card content
  const cardsWithParallax = products.map((product, index) => ({
    ...product,
    // We'll use this custom component in place of the image
    customComponent: (
      <div className="bg-white dark:bg-gray-900 p-6 shadow-xl border border-gray-200 dark:border-gray-800 h-full">
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-4">
          {new URL(product.link).hostname}
        </p>
        <div>{getRandomTestimonial(product.title)}</div>
      </div>
    ),
  }));

  return (
    <BackgroundGradient>
      <HeroParallax products={cardsWithParallax} useCustomComponent={true} />
    </BackgroundGradient>
  );
}

// Helper function to generate random testimonial text
function getRandomTestimonial(productName) {
  const testimonials = [
    <>This {productName} solution transformed our workflow completely.</>,
    <>We've seen incredible results since implementing {productName}.</>,
    <>{productName} helped us increase productivity by over 40%.</>,
    <>I can't imagine working without {productName} anymore.</>,
  ];

  return testimonials[Math.floor(Math.random() * testimonials.length)];
}

// Your existing products array
export const products = [
  {
    title: "John Doe",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user1.png",
    description:
      "Thanks to this platform, I found my dream job in Barcelona within weeks!",
  },
  {
    title: "TechCorp Spain",
    link: "https://techcorp.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company1.png",
    description:
      "We've hired exceptional talent from around the world using this AI-powered platform.",
  },
  {
    title: "Maria Gonzalez",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user2.png",
    description:
      "This service made relocating to Madrid for work seamless and stress-free.",
  },
  {
    title: "Innovatech Solutions",
    link: "https://innovatech.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company2.png",
    description:
      "The platform has been instrumental in finding skilled professionals for our projects in Spain.",
  },
  {
    title: "Carlos Ruiz",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user3.png",
    description:
      "I never thought finding a job in Spain could be this easy. Highly recommended!",
  },
  {
    title: "Global Enterprises Spain",
    link: "https://globalenterprises.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company3.png",
    description:
      "We've successfully expanded our team with top-tier international talent thanks to this platform.",
  },
  {
    title: "Ana Martinez",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user4.png",
    description:
      "The AI matching system connected me with the perfect job opportunity in Valencia.",
  },
  {
    title: "NextGen Tech",
    link: "https://nextgentech.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company4.png",
    description:
      "This platform has revolutionized the way we recruit talent for our offices in Spain.",
  },
  {
    title: "Luis Fernandez",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user5.png",
    description:
      "I was able to secure a fantastic job in Seville, all thanks to this amazing service.",
  },
  {
    title: "Horizon Ventures",
    link: "https://horizonventures.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company5.png",
    description:
      "We've found incredible professionals through this platform, making our hiring process effortless.",
  },
  {
    title: "Sophia Taylor",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user6.png",
    description:
      "This platform made my transition to working in Spain smooth and enjoyable.",
  },
  {
    title: "BrightFuture Inc.",
    link: "https://brightfuture.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company6.png",
    description:
      "We've achieved remarkable success in hiring top talent using this service.",
  },
  {
    title: "David Lopez",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user7.png",
    description:
      "I found an amazing job opportunity in Malaga thanks to this platform.",
  },
  {
    title: "TechWave Solutions",
    link: "https://techwave.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company7.png",
    description:
      "This platform has been a game-changer for our recruitment process in Spain.",
  },
  {
    title: "Elena Ramirez",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user8.png",
    description:
      "I couldn't be happier with the job I found through this service in Bilbao.",
  },
  {
    title: "Visionary Labs",
    link: "https://visionarylabs.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company8.png",
    description:
      "We've built a strong team of professionals with the help of this platform.",
  },
  {
    title: "Miguel Torres",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user9.png",
    description:
      "This platform connected me with the perfect employer in Valencia.",
  },
  {
    title: "Pioneer Tech",
    link: "https://pioneertechnology.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company9.png",
    description:
      "Our company has grown exponentially thanks to the talent we've hired here.",
  },
  {
    title: "Laura Sanchez",
    link: "https://example.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/user10.png",
    description:
      "I found my dream job in Granada through this incredible platform.",
  },
  {
    title: "FutureWorks",
    link: "https://futureworks.es",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/company10.png",
    description:
      "This platform has been a cornerstone in building our team in Spain.",
  },
];
