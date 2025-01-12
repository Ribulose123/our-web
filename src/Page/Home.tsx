import React from "react";
import WordChanger from "../Component/WordChanger";
import Wordplay from "../Component/Wordplay";
import { BiSolidHandRight } from "react-icons/bi";
import { FaGift } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";
import Gallary from "../Component/Gallary";
import WheelSpin from "../Component/WheelSpin";

const Home: React.FC = () => {
  return (
    <div>
      <div className="bg-[url(/image/rose-3407234_640.jpg)] bg-center h-full">
        <div>
          <h3 className="text-white text-center">
            <WordChanger />
          </h3>
          <h2 className="text-white text-2xl text-center md:-ml-[18px]">
            <Wordplay />
          </h2>

          <div className="items-end flex flex-col mr-7 sm:mr-20 relative">
            <div className="bg-red-700 w-[150px] sm:w-[300px] h-1 rounded-full mt-3 mb-2"></div>
            <img
              src="/image/img15.jpg"
              alt=""
              className="sm:w-[325px] sm:h-[325px] w-[200px]"
            />
            <img
              src="/image/Frame 5.png"
              alt=""
              className="w-[30%] md:w-[20%] absolute left-[35%] top-1/2 md:left-[58%] md:top-[35%]"
            />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col md:flex-row justify-center items-center  gap-8">
        {/* Image and Button */}
        <div className="text-center">
          <img
            src="/image/img30.jpeg"
            alt="Surprise"
            className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-lg shadow-md"
          />
          <button className="bg-red-700 hover:bg-red-800 active:bg-red-600 transition duration-300 text-[13px] md:text-[20px] w-[200px] md:w-[350px] flex p-3 items-center space-x-3 justify-center text-white mt-4 rounded-xl">
            Click here for a surprise <BiSolidHandRight /> <FaGift />
          </button>
        </div>

        {/* Valentine Message */}
        <div className="text-center md:text-left max-w-md md:max-w-lg">
          <h3 className="font-roboto text-[24px] text-gray-800">
            Celebrating Valentine
            <span className="flex justify-center md:justify-start items-center gap-4 mt-2">
              Together <FaHeart className="text-gray-300" />
            </span>
          </h3>
          <p className="text-gray-700 text-sm md:text-base mt-4 leading-relaxed">
            Valentine’s day has always been a favorite of mine, not because of
            what it's actually about, but because it's closest to my birthday. I
            had just gift exchanges with friends to look forward to. But this
            year is spiced up solely because of you. I am excited to celebrate
            Valentine with you even though we are miles apart. This website is
            one of my gifts to you, and hopefully, with your expertise, it could
            go live just for us to keep our future Valentine memories.
          </p>

          <div className="flex justify-center items-center">
            <PiButterflyFill className="text-pink-300 text-[4rem] flex justify-center items-center" />
          </div>
        </div>
      </div>

      <div className="bg-[#4A2A21] p-3">
        <Gallary/>
        
      </div>
      <div className="p-3">
      <WheelSpin/>
      </div>
    </div>
  );
};

export default Home;
