"use client";
import React from "react";
import Image from "next/image";
import { CustomButton } from "./CustomButton";

const Hero = ({ props }: any) => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">
          Find, book, or rent a cat - quickly and easily!
        </h1>
        <p>
          Streamline your car rental experience with our effortless booking
          process.
        </p>
      </div>
      <CustomButton
        title={"Explore Cars"}
        containerStyles={"bg-blue-600 text-white rounded-full p-1"}
        handleClick={handleScroll}
      />
      <div className="hero_image-container">
        <div className="hero_img">
          <Image src={""} alt="hero" fill className="object-contain" />
          
        </div>
        <div className="hero_image-overlay"> </div>
      </div>
    </div>
  );
};

export default Hero;
