import React, { useState, useEffect } from "react";
import Header from "../components/Header/header";
import Header2 from "../components/Header/header2";
import Footer from "../components/Footer/footer";
import axios from "axios";
import Footer2 from "../components/Footer/footer2";
import { GrHomeRounded } from "react-icons/gr";
import { VscSymbolField } from "react-icons/vsc";
import { FaShower } from "react-icons/fa";

interface Article {
  imgSrc: string;
  city: string;
  bathrooms: number;
  bedrooms: number;
  livingArea: string;
  price: number;
}

const Listing: React.FC = () => {
  const [getData, setGetData] = useState<Article[]>([]);

  useEffect(() => {
    const pullData = async () => {
      try {
        const response = await axios.get<{ articles: Article[] }>(
          "https://api.npoint.io/b3d737056fccc66266cc"
        );
        setGetData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    pullData();
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="mt-4 pt-44 pb-2 bg-[#052841]">
        <Header2 />
      </div>
      <main>
        <div className="main-heading py-4 px-4 md:px-52">
          <h1 className="text-2xl font-bold">Türkiye'de gayrimenkul</h1>
          <p className="mt-2">15 sayfadan 1. sayfa gösteriliyor.</p>
        </div>
        {getData.slice(18, 36).map((element, index) => (
          <div
            key={index}
            className="card flex flex-col md:flex-row px-4 md:px-52 py-4 mb-12"
          >
            <img
              src={element.imgSrc}
              alt="idk"
              className="rounded-md w-full md:w-72 h-60"
            />
            <div className="max-450:h-96 card-part2 w-full md:w-[800px] h-60 bg-white px-4 md:px-8 rounded-md mt-4 md:mt-0 md:ml-4">
              <h1 className="text-xl md:text-[28.6px]">
                Antalya LEED Sertifikalı Viva Defne Projesinde Şık Daireler
              </h1>
              <p className="my-2">{element.city}</p>
              <div className="content flex flex-col md:flex-row">
                <div className="content-texting flex-1">
                  <div className="icons flex mb-2 md:mb-0">
                    <div className="icon-1 flex items-center mr-4">
                      <GrHomeRounded className="mr-2" />
                      <p>{element.bathrooms + element.bedrooms}</p>
                    </div>
                    <div className="icon-2 flex items-center mr-4">
                      <VscSymbolField className="mr-2 text-xl" />
                      <p>{element.livingArea}</p>
                    </div>
                    <div className="icon-3 flex items-center">
                      <FaShower className="mr-2 text-xl" />
                      <p>{element.bathrooms}</p>
                    </div>
                  </div>
                  <p className="w-full md:w-[65%] my-2">
                    Duis mattis laoreet neque, et ornare neque sollicitudin at.
                    Proin sagittis dolor sed mi elementum.
                  </p>
                </div>
                <div className="price mt-4 md:mt-0 md:ml-[-20%]">
                  <p className="ml-4">{element.price}$'dan itibaren</p>
                  <button className="mt-4 text-xl pb-3 bg-blue-500 text-white py-2 px-12 rounded-md">
                    {element.price} $
                  </button>
                </div>
              </div>
              <div className="buttons mt-4 flex flex-col md:flex-row">
                <button className="border-2 font-bold py-2 px-8 md:px-32 rounded-md border-gray-600 text-gray-800 mb-2 md:mb-0 md:mr-4">
                  Hızlı İletişim
                </button>
                <button className="border-2 font-bold py-2 px-8 md:px-[142px] rounded-md border-orange-600 text-orange-600">
                  Detaylar
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Listing;
