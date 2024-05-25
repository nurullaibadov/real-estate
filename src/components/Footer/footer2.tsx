import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { AiFillInstagram } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import FooterLogo from "../../assets/div.footer-logo.png";
import "../../pages/App.css";

const Footer2: React.FC = () => {
  return (
    <div>
      <footer
        className="px-6 py-10 md:px-72 mb-[-10px]"
        style={{
          backgroundColor: "#052841",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-about md:col-span-1">
            <img src={FooterLogo} alt="idk" className="mb-4" />
            <p className="text-white">
              Kınacı Grup, inşaat ve gayrimenkul hizmetleri sektöründe 30 yıllık
              tecrübeye sahip bir şirketler grubudur.
            </p>
            <div className="logos flex mt-4">
              <FaFacebookF className="text-blue-600 text-3xl mr-4" />
              <FaTwitter className="text-blue-400 text-3xl mr-4" />
              <AiFillInstagram className="text-red-700 text-3xl mr-4" />
              <FaLinkedinIn className="text-blue-700 text-3xl mr-4" />
            </div>
          </div>
          <div className="linkTree md:col-span-1">
            <h1 className="text-2xl text-white">Linkler</h1>
            <div className="line w-8 bg-orange-500 h-1 rounded-xl mt-4 mb-4"></div>
            <ul>
              <li className="text-white">Kınacı Property Hakkında</li>
              <li className="text-white my-2">Türkiye’de Emlak</li>
              <li className="text-white">Hizmetlerimiz</li>
              <li className="text-white my-2">Geri Bildirim Verin</li>
              <li className="text-white">Bize Ulaşın</li>
            </ul>
          </div>
          <div className="mail md:col-span-1">
            <h1 className="text-2xl text-white">E-Bülten</h1>
            <div className="line w-8 bg-orange-500 h-1 rounded-xl mt-4 mb-4"></div>
            <input
              type="text"
              className="mb-4 w-full h-10 px-2 py-4 rounded-[6px]"
              placeholder="email adresinizi girin..."
            />
            <button
              type="button"
              className="mb-2 bg-orange-600 font-bold text-sm text-white px-8 rounded-md pt-2 pb-3"
            >
              KAYDET
            </button>
            <p className="text-gray-400">Size gereksiz mail atmayacağız!</p>
          </div>
          <div className="contact md:col-span-1">
            <h1 className="text-2xl text-white">İletişim</h1>
            <div className="line w-8 bg-orange-500 h-1 rounded-xl mt-4 mb-4"></div>
            <div className="location flex">
              <HiOutlineLocationMarker className="text-white text-2xl mt-1 mr-2" />
              <p className="text-white">
                Alanya Mahmutlar Yangılı Caddesi No: 11
              </p>
            </div>
            <div className="mail flex my-4">
              <LuMail className="text-white mt-1 mr-2" />
              <p className="text-white">info@kinacigroup.com</p>
            </div>
            <div className="phone flex">
              <FiPhone className="text-white mt-1 mr-2" />
              <p className="text-white">+90(544) 138 07 07</p>
            </div>
          </div>
        </div>
        <div className="end-footer flex justify-between mt-8">
          <p className="capitalize text-gray-400">
            Kullanım Şartları <span className="ml-4">Gizlilik</span>
          </p>
          <p className="capitalize text-gray-400">
            © Kınacı Gayrimenkul – Tüm hakları saklıdır
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
