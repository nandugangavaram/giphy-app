import Image from "next/image";
import React, { useEffect, useState } from "react";
import { VscKebabVertical } from "react-icons/vsc";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  const fetchGifCategories = async () => {
    const res = await fetch("/categories.json");
    const { data } = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
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
        <span className="px-1 py-2 flex items-center border-b-4 hover:gradient cursor-pointer">
          <VscKebabVertical />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
