"use client";

import React from "react";
import styles from "../app/CategoryPage.module.css"; // Import CSS Module

const CategoryPage = ({
  category,
  images
}: {
  category: string;
  images: string[];
}) => {
  return (
    <div className={styles.container}>
      <h1 className="text-center text-2xl font-bold my-4">
        {category.toUpperCase()}
      </h1>
      <div className={styles.imageScroller}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
