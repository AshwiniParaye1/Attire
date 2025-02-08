// pages/men.tsx
import React from "react";
import CategoryPage from "@/components/CategoryPage"; // Import the CategoryPage component

const MenPage = () => {
  const menImages = [
    "/images/men/1.jpg",
    "/images/men/2.jpg",
    "/images/men/3.jpg",
    "/images/men/4.jpg"
    // Add all other men images
  ];

  return <CategoryPage category="men" images={menImages} />;
};

export default MenPage;
