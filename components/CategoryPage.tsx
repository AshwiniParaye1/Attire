"use client";

import React from "react";
import styles from "../app/CategoryPage.module.css"; // Import CSS Module

const CategoryPage = ({ images }: { category: string; images: string[] }) => {
  return (
    <div className={styles.container}>
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
