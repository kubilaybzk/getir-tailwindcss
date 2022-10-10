import React from "react";
import {
  BsGlobe,
  BsFillPersonFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
export default function Header() {
  return (
    <div className="bg-brand-color pl-5">
      <div className="container mx-auto h-11 flex items-center justify-between align-middle">
      <div className="flex flex-row justify-between gap-x-2 md:gap-x-3">
      <a href="#">
          <img alt="getir-logo" className="pt-[2px]" src="/getir.png" width={46} />
        </a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all"> <span className="text-xs md:text-sm">  GetirYemek </span>     </a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all"> <span className="text-xs md:text-sm">  GetirBüyük </span>     </a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all"> <span className="text-xs md:text-sm">  GetirÇarşı </span>     </a>
      </div>

        <nav className="flex flex-row gap-x-8 hidden md:flex">
          <a
            className=" text-white flex flex-row items-center gap-x-2 transition-all font-bold hover:text-yellow-300"
            href="#"
          >
           
            <BsGlobe /> Türkçe(TR)
          </a>
          <a
            className=" text-white flex flex-row items-center gap-x-2 transition-all font-bold hover:text-yellow-300"
            href="#"
          >
            <BsFillPersonFill/>
            Giriş Yap
          </a>
          <a
            className=" text-white flex flex-row items-center gap-x-2 transition-all font-bold hover:text-yellow-300"
            href="#"
          >
            <BsFillPersonPlusFill/>
            Kayit Ol
          </a>
        </nav>
      </div>
    </div>
  );
}
