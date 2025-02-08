import React from "react";
import Navbar from "../components/navbar";
import SwipeNavigation from "@/components/SwipeNavigation";
import CategoryPage from "@/components/CategoryPage";

const Home = () => {
  const womenImages = [
    "/images/women/1.jpg",
    "/images/women/2.jpg",
    "/images/women/3.jpg", // Add more images as needed
    "/images/women/4.jpg"
  ];

  return (
    <>
      <div>
        {/* You can keep the Navbar fixed while the swipe content changes */}
        <Navbar />
        <SwipeNavigation />
        <CategoryPage category="Women" images={womenImages} />
      </div>
    </>
  );
};

export default Home;
