// pages/index.tsx (for Women)
import React from "react";
import CategoryPage from "@/components/CategoryPage"; // Import the CategoryPage component

const WomenPage = () => {
  const womenImages = [
    "/images/women/1.jpg",
    "/images/women/2.jpg",
    "/images/women/3.jpg",
    "/images/women/4.jpg"
    // Add all other women images
  ];

  return <CategoryPage category="women" images={womenImages} />;
};

export default WomenPage;
