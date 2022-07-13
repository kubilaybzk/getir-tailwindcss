import React from "react";
import {
  BsGlobe,
  BsFillPersonFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
export default function Header() {
  return (
    <div className="bg-brand-color">
      <div className="container mx-auto h-11 flex items-center justify-between">
      <div className="flex flex-row justify-between gap-x-3">
      <a href="#">
          <img className="pt-0.5" src="/getir.png" width={46} />
        </a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all">GetirYemek</a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all">GetirBüyük</a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all">GetirSu</a>
        <a href="#" className="text-white hover:text-yellow-400 transition-all">GetirÇarşı</a>
      </div>

        <nav className="flex flex-row gap-x-8">
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
