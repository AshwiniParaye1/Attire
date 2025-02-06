"use client";

import React, { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { IoIosGlobe } from "react-icons/io";

const Language = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  return (
    <div className="relative flex items-center">
      <button onClick={() => setShowLanguageModal(!showLanguageModal)}>
        <IoIosGlobe size={22} className="hover:text-gray-600" />
      </button>
      {showLanguageModal && (
        <div className="absolute top-12 right-[-110px] bg-white w-64 h-12 text-black flex items-center justify-between shadow-md shadow-slate-500 p-4">
          <p className="font-medium">English</p>
          <BsCheck size={22} />
        </div>
      )}
    </div>
  );
};

export default Language;
