// pages/kids.tsx
import React from "react";
import CategoryPage from "@/components/CategoryPage"; // Import the CategoryPage component

const KidsPage = () => {
  const kidsImages = [
    "/images/kids/1.jpg",
    "/images/kids/2.jpg",
    "/images/kids/3.jpg",
    "/images/kids/4.jpg"
    // Add all other kids images
  ];

  return <CategoryPage category="kids" images={kidsImages} />;
};

export default KidsPage;
