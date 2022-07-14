import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "COVID-19 Duyuru",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkça Sorulan Sorular",
        },
        {
          title: "Kişisel Verilerin Korunması",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "Kullanım Koşulları",
        },
        {
          title: "Çerez Politikası",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun",
        },
        {
          title: "Deponuzu Kiralayın",
        },
        {
          title: "GetirYemek Restoranı Olun",
        },
        {
          title: "GetirÇarşı İşletmesi Olun",
        },
        {
          title: "Zincir Restoranlar",
        },
      ],
    },
  ];

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color text-2xl">
                Getir'i indirin!
              </h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </nav>
          </section>

          {menus.map((item2, key) => {
            return (
              <section key ={key}>
                <nav className="grid gap-y-4">
                  <h6 className="text-lg text-primary-brand-color">{item2.title}</h6>
                  <nav>
                    <ul className="grid gap-y-2">
                      {item2.items.map((item3, key) => (
                        <li key={key}>
                          <a
                            href="#"
                            className="text-sm hover:text-brand-color"
                          >
                            {item3.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </nav>
              </section>
            );
          })}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-6">
                    <div className="text-xs text-gray-700 flex gap-x-8">
                        &copy; 2021 Getir
                        <a href="#" className="text-primary-brand-color hover:underline relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
                            KubilayBzk GetirClone
                        </a>
                    </div>
                    <nav className="flex gap-x-3">
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaFacebook size={21} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaTwitter size={21} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaInstagram size={21} />
                        </a>
                        <a href="#" className="h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100">
                            <FiGlobe size={18} />
                            Türkçe (TR)
                        </a>
                    </nav>
                </div>
      </div>
    </div>
  );
}

export default Footer;
