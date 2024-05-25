import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaRegMessage } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";
import "../../pages/App.css";

interface IconProps {
  className?: string;
}

const Header: React.FC = () => {
  return (
    <div>
      <div
        className="top-heading flex flex-col md:flex-row justify-around items-center py-3"
        style={{ backgroundColor: "#e9f3f9" }}
      >
        <div className="left-partition flex flex-col md:flex-row items-center mb-3 md:mb-0">
          <button className="flex bg-blue-800 text-white py-1 px-3 rounded-lg mb-2 md:mb-0">
            <FaRegMessage className="mt-[6px] mr-2" />
            info@kinacigroup.com
          </button>
          <button className="flex bg-orange-600 text-white py-1 px-3 rounded-lg mx-0 md:mx-3 mb-2 md:mb-0">
            <CiPhone className="mt-[5px] mr-2" />
            +90(544) 138 07 07
          </button>
          <button className="flex text-orange-600 border-2 border-orange-500 py-1 px-3 rounded-lg">
            <FaCalendarAlt className="mt-[4px] mr-2" />
            Randevu Al
          </button>
        </div>
        <div className="right-partition flex flex-col md:flex-row items-center">
          <button className="bg-red-500 text-white py-1 px-3 rounded-lg mb-2 md:mb-0">
            Begendiklerim
          </button>
          <select
            name="dil"
            id="lang"
            className="text-black py-1 px-1 mx-3 rounded-md mb-2 md:mb-0"
          >
            <option value="tr">Türkçe</option>
            <option value="eng">İngilizce</option>
            <option value="ru">Rusça</option>
            <option value="az">Azerbaycanca</option>
          </select>
          <select
            name="cherish"
            id="value"
            className="text-black py-1 px-1 rounded-md"
          >
            <option value="usd">USD</option>
            <option value="try">TRY</option>
            <option value="azn">AZN</option>
          </select>
        </div>
      </div>
      <nav className="flex flex-col md:flex-row justify-around items-center py-4 px-4">
        <div className="nav-head flex flex-col md:flex-row items-center">
          <Link to="/" className="mb-4 md:mb-0">
            <img src={logo} alt="logo" className="mt-[-23px]" />
          </Link>
          <ul className="flex flex-col md:flex-row items-center">
            <li className="px-3 mb-2 md:mb-0">
              <Link to="/">Anasayfa</Link>
            </li>
            <li className="px-3 mb-2 md:mb-0">
              <Link to="/listing">
                <select name="kiraci" id="emlak">
                  <option value="emlak">Emlak</option>
                  <option value="daire">Daire</option>
                  <option value="arsa">Arsa</option>
                </select>
              </Link>
            </li>
            <li className="px-3 mb-2 md:mb-0">
              <Link to="/about">Şirket hakkında</Link>
            </li>
            <li className="px-3 mb-2 md:mb-0">
              <a href="#">Hizmetlerimiz</a>
            </li>
            <li className="px-3 mb-2 md:mb-0">
              <Link to="/contact">İletişim</Link>
            </li>
            <li className="px-3 mb-2 md:mb-0">
              <Link to="/comment">Yorumlar</Link>
            </li>
            <li className="px-3 mb-2 md:mb-0">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="nav-end flex items-center mt-3 md:mt-0">
          <SocialIcon icon={FaFacebookF} className="text-blue-800" />
          <SocialIcon icon={FaTwitter} className="mx-3 text-teal-700" />
          <SocialIcon icon={FaInstagram} className="text-red-400" />
          <SocialIcon icon={FaLinkedin} className="mx-3 text-blue-600" />
        </div>
      </nav>
    </div>
  );
};

const SocialIcon: React.FC<{ icon: IconType } & IconProps> = ({
  icon: Icon,
  ...props
}) => {
  return <Icon {...props} />;
};

export default Header;
