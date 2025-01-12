 import React, { useState } from "react";

const WheelSpin = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const items = [
    { label: "Romantic Dinner", color: "#f3af1e" },
    { label: "Netflix and Chill", color: "#f6461d" },
    { label: "Nothing", color: "#53bfa7" },
    { label: "Spa Date", color: "#0ea9d7" },
    { label: "A Trip", color: "#796eb2" },
    { label: "Gift Shopping", color: "#f23e51" },
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    const newRotation = rotation + 3600 + Math.floor(Math.random() * 360); // Spin at least 10 times
    setIsSpinning(true);
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
    }, 5000); // Match the animation duration
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Wheel Container */}
      <div className="relative w-72 h-72">
        {/* Rotating Wheel */}
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? "transform 5s ease-in-out" : "none",
            background: `conic-gradient(${items
              .map((item, index) => `${item.color} ${(index / items.length) * 100}%, ${item.color} ${(index + 1) / items.length * 100}%`)
              .join(", ")})`,
          }}
        >
          {/* Wheel Segments */}
          {items.map((item, index) => (
            <div
              key={index}
              className="absolute w-1/2 h-1/2 flex items-center justify-center"
              style={{
                transform: `rotate(${index * (360 / items.length)}deg)`,
                transformOrigin: "bottom right",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
               <span
                className="text-[12px] text-white font-bold"
                style={{
                  transform: `rotate(${360 / items.length / 2}deg) translateY(-50%) `,
                  textAlign: "center",
                  position: "absolute",
                  top: "50%",
                  left: "30%",
                  transformOrigin: "center",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Arrow */}
       {/* Center Spin Button */}
<div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gray-500 border border-gray-700 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
  <span className="text-[13px] text-white">SPIN</span>
</div>

{/* Arrow */}
<div
  className="absolute top-[39%] left-1/2 transform -translate-x-1/2 -translate-y-2"
  style={{
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    borderBottom: "20px solid gray",
  }}
></div>

      </div>

    <div className="flex justify-around items-center flex-col gap-12">
            {/* Instruction */}
      <div className="text-center">
        <h3 className="text-2xl font-bold ">Spin the Wheel</h3>
        <p className="text-gray-500">Let’s start a tradition!</p>
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="mt-4 px-6 py-3 w-40 h-40 bg-white border border-pink-600 text-black font-semibold rounded-full shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Spin the Wheel
      </button>
    </div>
    </div>
  );
};

export default WheelSpin;
