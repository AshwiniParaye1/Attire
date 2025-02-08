// pages/baby.tsx
import React from "react";
import CategoryPage from "@/components/CategoryPage"; // Import the CategoryPage component

const BabyPage = () => {
  const babyImages = [
    "/images/baby/1.jpg",
    "/images/baby/2.jpg",
    "/images/baby/3.jpg",
    "/images/baby/4.jpg"
    // Add all other baby images
  ];

  return <CategoryPage category="baby" images={babyImages} />;
};

export default BabyPage;
