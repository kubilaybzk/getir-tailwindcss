export default function Download() {
  return (
    <div className="bg-mobile-app bg-primary-brand-color flex flex-col md:flex-row justify-center items-center ">
      <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
        <h3 className=" text-white text-xl font-bold tracking-tight">
          {`Getir'i indirin!`}
        </h3>
        <p className=" text-white font-semibold text-sm md:text-lg">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </p>
        <nav className="mt-5 flex gap-x-2">
          <a href="#" className="transition-all transform hover:scale-105">
            <img alt="getir-download-1" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
          </a>
          <a href="#" className="transition-all transform hover:scale-105">
            <img alt="getir-download-2" src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
          </a>
          <a href="#" className="transition-all transform hover:scale-105">
            <img alt="getir-download-3" src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
          </a>
        </nav>
      </div>
      <picture className="pt-6 hidden  md:block self-end">
        <img alt="Download" src="./Download.png" />
      </picture>
    </div>
  );
}
