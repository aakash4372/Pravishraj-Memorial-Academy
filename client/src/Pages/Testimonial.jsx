import React, { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  StarHalf,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Full review list
const reviews = [
  {
    name: "R. Vignesh",
    role: 'B.Com. Graduate',
    rating: 4.5,
    content:
      'The faculty and staff were extremely supportive throughout my course. Thanks to PMAT, I completed my degree while working full-time.',
  },
  {
    name: "S. Priya",
    role: 'MBA',
    rating: 5,
    content:
      'The certificate I received through the academy helped me get promoted. Highly recommend it to working professionals!!',
  },
];

// ✅ Helper to split reviews into chunks of N per slide,
//    intelligently handling small review lists to ensure a working loop.
const chunkArray = (arr, size) => {
  if (size <= 0) return [arr];
  
  // If the number of items is less than or equal to the size,
  // we repeat the content to create multiple slides for a visible loop.
  let reviewsToChunk = [...arr];
  if (arr.length <= size) {
    const needed = size + 1; // Ensure at least 2 slides for a loop
    while (reviewsToChunk.length < needed) {
      reviewsToChunk = [...reviewsToChunk, ...arr];
    }
  }

  const chunked = [];
  for (let i = 0; i < reviewsToChunk.length; i += size) {
    const chunk = reviewsToChunk.slice(i, i + size);
    if (chunk.length === size) {
      chunked.push(chunk);
    } else {
      // For the last, incomplete chunk, fill it with items from the beginning
      const filledChunk = [...chunk];
      const needed = size - filledChunk.length;
      filledChunk.push(...reviewsToChunk.slice(0, needed));
      chunked.push(filledChunk);
    }
  }

  return chunked;
};

const Rating = ({ rating, showLabel = false, className = "", ...rest }) => (
  <p className={`flex flex-wrap gap-0.5 ${className}`} {...rest}>
    <span className="flex">
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        if (index <= Math.floor(rating)) {
          return <Star key={i} className="text-yellow-500 w-5 h-5 fill-yellow-500" />;
        } else if (rating > i && rating < index + 1) {
          return <StarHalf key={i} className="text-yellow-500 w-5 h-5 fill-yellow-500" />;
        } else {
          return <Star key={i} className="text-yellow-200 w-5 h-5" />;
        }
      })}
    </span>
    {showLabel && <span className="ml-1">{rating.toFixed(1)}</span>}
  </p>
);

const TestimonialItem = ({ item }) => {
  const { rating, content, name, role } = item;

  // Function to get initials from the name
  const getInitials = (fullName) => {
    if (!fullName) return "";
    const nameParts = fullName.split(" ");
    const firstInitial = nameParts[0] ? nameParts[0].charAt(0).toUpperCase() : "";
    const lastInitial = nameParts.length > 1 && nameParts[nameParts.length - 1]
      ? nameParts[nameParts.length - 1].charAt(0).toUpperCase()
      : "";
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl h-full duration-300 p-6">
      <div className="mt-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            {/* Avatar using initials */}
            <div className="mr-2 flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">
              {getInitials(name)}
            </div>
            <div>
              <h5 className="text-xl break-all font-medium">{name}</h5>
              {role && <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>}
            </div>
          </div>
          <Rating rating={rating} />
        </div>
        <p className="leading-[1.8] opacity-80 mb-6">{content}</p>
      </div>
    </div>
  );
};

const variants = {
  initial: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

const Testimonial21 = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonialSlides = useMemo(() => chunkArray(reviews, 2), []);

  const handleControl = (type) => {
    if (type === "prev") {
      setDirection(-1);
      setIndex(index <= 0 ? testimonialSlides.length - 1 : index - 1);
    } else if (type === "next") {
      setDirection(1);
      setIndex(index >= testimonialSlides.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <section className="ezy__testimonial21 light py-14 md:py-24 bg-[#efefef] dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 max-w-6xl mx-auto relative">
        <div className="max-w-6xl mx-auto mb-10 px-4">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0b245c] whitespace-nowrap">
              Testimonials
            </h2>
            <div className="flex-1 h-[2px] bg-gray-300 ml-4" />
          </div>
          <p className="text-gray-600 max-w-xl text-base md:text-lg text-left">
            Hear from our students and partners about how our programs have helped them
            grow in their careers and achieve their goals.
          </p>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-6 mt-12"
            >
              {testimonialSlides[index].map((item, i) => (
                <div 
                  className="w-full lg:w-[90%] mx-auto" 
                  key={item.key || item.name + i}
                >
                  <TestimonialItem item={item} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative flex justify-center items-center my-12">
          <button
            className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
            onClick={() => handleControl("prev")}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
            onClick={() => handleControl("next")}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return <Testimonial21 />;
}
