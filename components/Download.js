import React from "react";

export default function Download() {
  return (
    <div className="container mx-auto w-full">
      <div className="mx-auto flex flex-row justify-between bg-mobile-app h-[312px]">
        <div className="h-full flex-1 mt-16 ml-12 ">
          <div className="flex flex-col gap-y-4">
            <h3 className="font-semibold text-2xl text-white ">
              Getir'i indirin!
            </h3>
            <span className="font-semibold text-x text-white w-[360px]">
              İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
            </span>
          </div>
          <div className="flex flex-row gap-x-4 mt-9">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </div>
        </div>

        <div className="h-full flex-1 flex justify-end">
          <img src="./Download.png" className="object-fit mb-0"/>
        </div>
      </div>
    </div>
  );
}
