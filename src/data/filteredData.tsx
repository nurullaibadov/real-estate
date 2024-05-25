import React from "react";
import { CiHome } from "react-icons/ci";
interface Article {
  imgSrc: string;
  streetAddress: string;
  city: string;
  country: string;
  price: number;
  bathrooms: number;
  bedrooms: number;
}

interface Props {
  data: Article[];
}

const FilteredData: React.FC<Props> = ({ data }) => {
  return (
    <div className="New homie grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-2 px-4 sm:px-8 lg:px-72 gap-4">
      {data.slice(0, 3).map((element, index) => (
        <div key={index} className="w-full sm:w-72 h-[420px] bg-white">
          <img
            className="w-full sm:w-72 h-60"
            src={element.imgSrc}
            alt="api problem sorry for this"
          />
          <div className="home-details flex flex-col py-2 px-2">
            <div className="about-details">
              <h1 className="text-lg mb-2">{element.streetAddress}</h1>
              <div className="paragraph flex">
                <p>{element.city}</p>,<p>{element.country}</p>
              </div>
            </div>
            <button className="mt-4 sm:mt-14 sm:ml-12 bg-blue-500 py-2 px-8 text-white rounded-lg">
              {element.price}$
            </button>
          </div>
          <p className="flex mt-[-20px] ml-2">
            <CiHome className="relative top-1" />:
            {Math.pow(element.bathrooms + element.bedrooms, 1)}
          </p>
          <div className="flex justify-between mt-4 px-2">
            <button
              type="button"
              className="border-2 border-gray-400 py-1 px-4 rounded-xl text-black-700 font-bold"
            >
              Hizli iletisim
            </button>
            <button
              type="button"
              className="border-2 border-orange-400 py-1 px-8 rounded-xl text-orange-500 font-bold"
            >
              Detaylar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredData;
