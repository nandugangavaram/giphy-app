"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const fetchGifCategories = async () => {
    const res = await fetch("/categories.json");
    const { data } = await res.json();
    console.log("🚀 ~ fetchGifCategories ~ data:", data);
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <>
      <div className="flex justify-between p-4 items-center bg-black text-white">
        <div className="flex">
          <Image src="/logo.svg" alt="Logo" height={36} width={36} />
          <span className="text-4xl font-bold ml-1">GIPHY</span>
        </div>
        <div className="flex gap-5">
          <span className="px-1 py-2 font-bold border-b-4 hover:gradient cursor-pointer">
            Reactions
          </span>
          <span className="px-1 py-2 font-bold border-b-4 hover:gradient cursor-pointer">
            Adjectives
          </span>
          <span className="px-1 py-2 font-bold border-b-4 hover:gradient cursor-pointer">
            Animals
          </span>
          <span className="px-1 py-2 font-bold border-b-4 hover:gradient cursor-pointer">
            Anime
          </span>
          <span className="px-1 py-2 font-bold border-b-4 hover:gradient cursor-pointer">
            Art & Design
          </span>
          <button
            className="flex items-center border-b-4 hover:gradient cursor-pointer"
            onClick={() => setShowCategories(!showCategories)}
          >
            <FaEllipsisV size={14} />
          </button>
        </div>
      </div>
      {showCategories && (
        <div className="gradient">
          <h1 className="text-white text-center font-bold text-3xl pb-4 pt-2">
            Categories
          </h1>
          <hr className="mx-4" />
          <ul className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-center gradient">
            {categories.map((category) => (
              <li
                key={category.name_encoded}
                className="text-white cursor-pointer"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
