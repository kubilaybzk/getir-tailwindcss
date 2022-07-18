import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "./api/smallbox.json";
import Box from "./ui/Box";
export default function SmallBoxs() {
  const [smallbox, setSmallbox] = useState([]);

  useEffect(() => {
    setSmallbox(Banners);
  }, []);

  return (
    <div className="md:flex md:flex-row md:justify-center ">
      {smallbox.length &&
        smallbox.map((card) => (
          <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center">
            <img
              className="w-[150px] h-[150px] mb-6"
              src={card.image}
            />
            <h6 className="font-semibold text-sm md:text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700 md:text-lg">
              {card.description}
            </p>
          </div>
        ))}
    </div>
  );
}
