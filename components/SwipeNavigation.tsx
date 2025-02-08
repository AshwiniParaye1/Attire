// components/SwipeNavigation.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SwipeNavigation = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  // Define the different navigation links and associated images
  const pages = [
    {
      name: "Women",
      url: "/",
      image: "/images/women/1.jpg",
      bgImage: "/images/women/1.jpg"
    },
    {
      name: "Men",
      url: "/men",
      image: "/images/men/1.jpg",
      bgImage: "/images/men/1.jpg"
    },
    {
      name: "Kids",
      url: "/kids",
      image: "/images/kids/1.jpg",
      bgImage: "/images/kids/1.jpg"
    },
    {
      name: "Baby",
      url: "/baby",
      image: "/images/baby/1.jpg",
      bgImage: "/images/baby/1.jpg"
    }
  ];

  useEffect(() => {
    router.push(pages[currentPage].url); // Change URL based on current page
    document.body.style.backgroundImage = `url(${pages[currentPage].bgImage})`; // Update background image
  }, [currentPage]);

  // Define motion variants for smooth animations
  const variants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" },
    swipeLeft: { x: "-100%" },
    swipeRight: { x: "100%" },
    swipeUp: { y: "-100%" },
    swipeDown: { y: "100%" }
  };

  let touchStartX = 0;
  let touchStartY = 0;

  // Swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const touchEndX = touch.clientX;
    const touchEndY = touch.clientY;

    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Swipe left or right
      if (diffX > 0) {
        // Swipe right (show previous page)
        setCurrentPage((prevPage) =>
          prevPage > 0 ? prevPage - 1 : pages.length - 1
        );
      } else {
        // Swipe left (show next page)
        setCurrentPage((prevPage) =>
          prevPage < pages.length - 1 ? prevPage + 1 : 0
        );
      }
    } else {
      // Swipe up or down (optional: change this behavior if needed)
      if (diffY > 0) {
        // Handle swipe up
      } else {
        // Handle swipe down
      }
    }
  };

  return (
    <div
      className="swipe-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="image-container"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        key={currentPage} // Ensure smooth transition on page change
      >
        <Image
          src={pages[currentPage].image}
          alt={pages[currentPage].name}
          className="image"
          width={200}
          height={200}
        />
      </motion.div>

      <div className="page-name">{pages[currentPage].name}</div>
    </div>
  );
};

export default SwipeNavigation;
