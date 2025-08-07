import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pravishraj Memorial Academy",
    description:
      "Welcome to our esteemed institution where knowledge meets innovation. We provide a holistic learning experience to shape the leaders of tomorrow.",
    buttonText: "Discover Our Courses",
    buttonLink: "/courses",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1673971700988-346588461fa7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Innovate. Educate. Inspire.",
    description:
      "Our dedicated faculty and state-of-the-art facilities are here to help you achieve your full potential and make a difference in the world.",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
  };

  const pauseAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    }
    return () => pauseAutoPlay();
  }, [isPaused]);

  const handleNext = () => {
    pauseAutoPlay();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    setIsPaused(true);
  };

  const handlePrev = () => {
    pauseAutoPlay();
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + heroSlides.length) % heroSlides.length
    );
    setIsPaused(true);
  };

  const slide = heroSlides[currentSlide];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  // Title animation: Slide in from left with bounce
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  // Description animation: Fade in with scale effect
  const descriptionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  // Main button animation: scale and color change on hover and tap
  const mainButtonVariants = {
    initial: {
      scale: 1,
      backgroundColor: "rgba(72, 176, 108, 1)", // light green
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(61, 145, 89, 1)", // dark green
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative w-full h-[95vh] overflow-hidden group bg-black" id="home">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-50"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <motion.div
          key={currentSlide}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-3xl"
        >
          <motion.h1
            variants={titleVariants}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {slide.title}
          </motion.h1>
          <motion.p
            variants={descriptionVariants}
            className="text-lg md:text-xl mb-8"
          >
            {slide.description}
          </motion.p>
          <motion.a
            href={slide.buttonLink}
            variants={mainButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 rounded-md font-semibold text-lg text-white"
          >
            {slide.buttonText}
          </motion.a>
        </motion.div>
      </div>

      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrev}
      >
        <ChevronLeft size={32} />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext}
      >
        <ChevronRight size={32} />
      </motion.button>
    </div>
  );
};

export default Hero;