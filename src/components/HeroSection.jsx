import React from "react";

const HeroSection = () => {
  return (
    <div className="h-40 lg:h-72 overflow-hidden">
      <img
        src="./chicas.jpg"
        alt="Hero image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSection;
