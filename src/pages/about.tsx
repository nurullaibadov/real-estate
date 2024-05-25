import React, { useState, useEffect } from "react";
import Header from "../components/Header/header";
import furnutare from "../assets/h36.jpg.png";

import Header2 from "../components/Header/header2";
import Footer from "../components/Footer/footer";
import Footer2 from "../components/Footer/footer2";
import { FaCreativeCommonsBy } from "react-icons/fa";
import axios from "axios";
import explain from "../assets/explain.png";
import "../pages/App.css";
interface Article {
  name: string;
  profile_image_url: string;
}
const About: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/97f7a3c4c9b06a557a4f"
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Makaleler alınırken hata oluştu:", error);
      }
    };
    fetchArticles();
  }, []);
  return (
    <div>
      <Header />
      <div
        className="mt-4 pt-32 pb-2"
        style={{
          backgroundColor: "#fdf0ea",
        }}
      >
        <Header2 />
      </div>
      <main>
        <div className="bg-pic pt-8 pl-4 md:pl-52">
          <h1 className="text-3xl font-bold mb-1">Kınacı Property</h1>
          <p>Anasayfa / Şirket hakkında</p>
        </div>
        <div className="homeContent flex py-8 ml-4 md:ml-48 mt-4">
          <div className="leftSide w-full md:w-[110%] text-3xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="rightSide">
            <div className="topSide w-full md:w-[70%]">
              Lorem ipsum dolor sit amet consectetur. Facilisi ac posuere
              sodales vel duis. Sapien felis lectus lacinia id odio adipiscing
              pretium. Condimentum vivamus cras enim amet est. Ac placerat sed
              quis placerat orci nibh in sed ullamcorper.
            </div>
            <div className="mt-8 bottomSide w-full md:w-[70%]">
              Lorem ipsum dolor sit amet consectetur. Consectetur vel rhoncus ac
              dis in et ornare habitant. Accumsan ornare auctor dignissim
              convallis elementum convallis. Vitae feugiat nulla purus nec etiam
              nisl urna elit purus. Commodo sagittis convallis et purus lectus.
              Neque dignissim eget pellentesque id feugiat facilisi.
            </div>
          </div>
        </div>
        <div className="pics w-96 relative ml-6 md:ml-52 mt-8 md:w-[1090px]">
          <div className="childPic absolute mt-6 ml-[-40px]"></div>
          <div className="customerStatics flex pt-12 md:pt-72 px-4 md:px-20 text-white flex-wrap">
            <div className="static1 w-1/2 md:w-auto mb-8 md:mb-0">
              <h1 className="text-5xl font-semibold text-center mb-4">4 bin</h1>
              <p>Mutlu Müşteri</p>
            </div>
            <div className="static2 px-4 md:px-24 w-1/2 md:w-auto mb-8 md:mb-0">
              <h1 className="text-5xl font-semibold text-center mb-4">242</h1>
              <p>Resmi Satış</p>
            </div>
            <div className="static3 w-1/2 md:w-auto mb-8 md:mb-0">
              <h1 className="text-5xl font-semibold text-center mb-4">18</h1>
              <p>Gayrimenkul Uzmanı</p>
            </div>
            <div className="static4 px-4 md:px-24 w-1/2 md:w-auto mb-8 md:mb-0">
              <h1 className="text-5xl font-semibold text-center mb-4">36</h1>
              <p>Yıllık Tecrübe</p>
            </div>
            <div className="static5 w-1/2 md:w-auto">
              <h1 className="text-5xl font-semibold text-center mb-4">18</h1>
              <p>İlde Hizmet</p>
            </div>
          </div>
        </div>
        <div className="dataSection">
          <div className="dataHeading">
            <h1 className="text-3xl font-bold mt-8 text-center">Bizim Takım</h1>
            <p className="text-center mt-2">
              Bazı lacinia diam quis lacus euismod
            </p>
          </div>
          <div className="mt-12 mb-24 ml-4   gap-x-2 gap-y-8 grid grid-cols-2 md:grid-cols-4 px-4 md:px-48">
            {articles.slice(52, 64).map((article, index) => (
              <div key={index}>
                <div className="card ">
                  <h1 className="text-xl font-bold ml-4">{article.name}</h1>
                  <p className="my-2 capitalize">Yönetim Kurulu Başkanı</p>
                  <img
                    className="w-48 h-64 rounded-xl"
                    src={article.profile_image_url}
                    alt="profile"
                  />
                  <p className="ml-4 mt-2">+90 (542) 542 38 07</p>
                  <p className="ml-4 my-1">info@kinacigroup.com</p>
                  <p className="ml-4">Türkçe, Ingilizce</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="max-450:hidden theBestForYou w-full   md:w-[80%] h-[553px] ml-4 md:ml-32 rounded-xl my-72 px-4 md:px-36 py-12 mt-[-80px] mb-4 flex"
          style={{
            backgroundColor: "#fdf0ea",
          }}
        >
          <div className="max-450:hidden bestTexting mt-[-290px] md:mt-0 ">
            <h1 className="text-3xl ml-12 w-72 md:w-auto font-semibold mb-8">
              Sizin İçin En Doğru olanı bulalım...
            </h1>
            <div className="lumps">
              <div className="lump-1 flex">
                <div className="chunk-1 mt-4 mr-4 md:mr-8 text-2xl">
                  <FaCreativeCommonsBy />
                </div>
                <div className="lump-text1 ">
                  <p className="mb-2 font-bold">Lorem ipsum dolor sit amet </p>
                  <p className="w-full">
                    Lorem ipsum dolor sit amet consectetur. Netus praesent sit
                    consectetur purus nulla nisl a.
                  </p>
                </div>
              </div>
              <div className="lump-2 flex my-8">
                <div className="chunk-2 mt-4 mr-4 md:mr-8 text-2xl">
                  <FaCreativeCommonsBy />
                </div>
                <div className="lump-text2">
                  <p className="font-bold mb-2">Lorem ipsum dolor sit amet </p>
                  <p className="w-full">
                    Lorem ipsum dolor sit amet consectetur. Netus praesent sit
                    consectetur purus nulla nisl a.
                  </p>
                </div>
              </div>
              <div className="lump-3 flex">
                <div className="chunk-3 mt-4 mr-4 md:mr-8 text-2xl">
                  <FaCreativeCommonsBy />
                </div>
                <div className="lump-text3 mb-4">
                  <p className="font-bold mb-2">Lorem ipsum dolor sit amet </p>
                  <p className="w-full">
                    Lorem ipsum dolor sit amet consectetur. Netus praesent sit
                    consectetur purus nulla nisl a.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-450:hidden explainMedia ">
            <img
              src={explain}
              alt="explain"
              className="w-[270px] h-[280px] md:w-[523px] md:h-[552px]   ml-[20px] mt-[-48px]"
            />
          </div>
        </div>
        <div
          className="about flex flex-col sm:flex-row py-8 px-4 sm:px-72"
          style={{ backgroundColor: "#f3f8fB" }}
        >
          <div
            className="form-part px-4 sm:px-12 py-16 w-full sm:w-[500px] rounded-2xl"
            style={{ backgroundColor: "white" }}
          >
            <form action="post">
              <h1 className="text-xl sm:text-3xl text-gray-900 font-bold mb-1">
                Bilgi almak istiyorum
              </h1>
              <p className="text-sm mb-2">
                Aliquam lacinia diam quis lacus euismod
              </p>
              <label htmlFor="name">Ad & Soyad</label>
              <br />
              <input
                className="mt-2 mb-4 border-2 border-gray-400 px-3 py-2 w-full"
                type="text"
                name="title"
                id="name"
                placeholder="Adınızı girin..."
              />
              <br />
              <label htmlFor="phone">Telefon Numarası</label>
              <br />
              <input
                className="mt-2 mb-4 border-2 border-gray-400 px-3 py-2 w-full"
                type="phone"
                name="call"
                id="phone"
                placeholder="+90(***.***.**.**)"
              />
              <br />
              <label htmlFor="mail">E-Mail </label>
              <br />
              <input
                className="mt-2 mb-2 border-2 border-gray-400 px-3 py-2 w-full"
                type="email"
                name="title"
                id="mail"
                placeholder="e-mail adresinizi girin..."
              />
              <br />
              <label htmlFor="PropertyType">Emlak Tipi</label>
              <br />
              <select
                name="own"
                id="PropertyType"
                className="border-2 border-gray-400 w-full h-12 mt-2 mb-4 px-2"
              >
                <option value="1">Secim yapin</option>
                <option value="2">Daire</option>
                <option value="3">Arsa</option>
                <option value="4">Bina</option>
              </select>
              <br />
              <label htmlFor="cityType">Şehir</label>
              <br />
              <select
                name="own"
                id="cityType"
                className="border-2 border-gray-400 w-full h-12 mt-2 mb-4 px-2"
              >
                <option value="1">Secim yapin</option>
                <option value="2">Istanbul</option>
                <option value="3">Ankara</option>
                <option value="4">Adana</option>
              </select>
              <br />
              <label htmlFor="price">Fiyat</label>
              <br />
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  type="text"
                  className="border-2 mt-4 border-gray-400 w-full sm:w-36 h-12 rounded-[9px] px-4"
                  name="fiyat"
                  id="price"
                  placeholder="0'dan"
                />
                <input
                  type="text"
                  className="border-2 mt-4 sm:mt-0 border-gray-400 w-full sm:w-56 h-12 rounded-[9px] px-4 md:mt-4"
                  name="fiyat"
                  id="price"
                  placeholder="1000.000."
                />
              </div>
              <button
                type="submit"
                className="mt-6 max-450:w-[345px] bg-orange-600 text-white  sm: px-4 py-2 rounded-xl md:bg-orange-600 w-96"
              >
                Kaydet ve Gönder
              </button>
            </form>
          </div>
          <div className="info-part mt-8 sm:mt-0 sm:ml-16 text-center sm:text-left">
            <img
              src={furnutare}
              alt="Kınacı Grup"
              className="mt-12 rounded-lg shadow-lg w-[800px] h-[650px]"
            />
          </div>
        </div>
        <Footer />
        <div className="mt-[-130px] pt-32 pb-2">
          <Footer2 />
        </div>
      </main>
    </div>
  );
};

export default About;
