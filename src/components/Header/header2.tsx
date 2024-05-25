import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import FilteredData from "../../data/filteredData";

interface Article {
  imgSrc: string;
  streetAddress: string;
  city: string;
  country: string;
  price: number;
  bathrooms: number;
  bedrooms: number;
}

const Header2: React.FC = () => {
  const [filteredData, setFilteredData] = useState<Article[]>([]);
  const [allData, setAllData] = useState<Article[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 1000000000,
  });

  const [showFilteredChoice, setShowFilteredChoice] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPriceRange((prevState) => ({ ...prevState, [name]: parseInt(value) }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ articles: Article[] }>(
          "https://api.npoint.io/b3d737056fccc66266cc"
        );
        setAllData(response.data.articles);
        setFilteredData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleFilter = () => {
    setFilteredData(
      allData.filter(
        (item) =>
          item.price >= priceRange.min &&
          item.price <= priceRange.max &&
          item.bedrooms === parseInt(selectedOption)
      )
    );
    setShowFilteredChoice(true);
  };

  const handleResetFilters = () => {
    setPriceRange({ min: 0, max: 1000000000 });
    setSelectedOption("");
    setShowFilteredChoice(false);
    setFilteredData(allData);
  };

  return (
    <div>
      <div className="end-heading relative top-[-99px]">
        <select
          name="country"
          id="country"
          className="ml-2 md:ml-52 bg-orange-400 text-white rounded-lg py-2 px-1"
        >
          <option value="1">Türkiye</option>
          <option value="2">Azerbaycan</option>
          <option value="3">Amerika</option>
          <option value="4">Spain</option>
        </select>
        <div className="filtering-section mt-6  w-full md:w-[1500px]">
          <div className="ft flex flex-col md:flex-row justify-around">
            <div className="filtering-top-left">
              <h3 className="bg-white w-28 h-9 pt-2 ml-[9.9px]  rounded-t-md text-center">
                Hepsi
              </h3>
            </div>
            <div className="filtering-top-right flex flex-col md:flex-row mt-4 md:mt-[-10px] ml-[-30px]">
              <button className="bg-blue-500 text-white py-2 px-3 rounded-md mb-2 md:mb-0">
                Arama İsteğinde Bulun
              </button>
              <button className="bg-orange-500 text-white py-2 px-3 rounded-md mx-0 md:mx-2 mb-2 md:mb-0">
                Bir Soru Sor
              </button>
              <button className="bg-green-500 text-white py-2 px-3 rounded-md mb-2 md:mb-0">
                Bilgi Turuna Başla
              </button>
              <button className="bg-red-500 text-white py-2 px-3 rounded-md mx-0 md:mx-2 mb-2 md:mb-0">
                Türk Vatandaşlığı
              </button>
            </div>
          </div>
          <div className="fb flex flex-col md:flex-row ml-2 md:ml-52 w-[95%] md:w-[72.6%] h-auto md:h-28 shadow-lg py-2 px-2 bg-white rounded-b-xl rounded-tr-xl">
            <div className="searching-item-1 mb-4 md:mb-0">
              <h3 className="capitalize">Emlak Tipi</h3>
              <select
                name="propertyType"
                id="propertyType"
                className="border-2 border-gray-400 rounded-sm w-full md:w-32"
              >
                <option value="select">Secim yapin</option>
                <option value="daire">Daire</option>
                <option value="mustakili">Müstakil</option>
                <option value="arsa">Arsa</option>
              </select>
            </div>
            <div className="searching-item-2 mx-0 md:mx-8 mb-4 md:mb-0">
              <h3 className="capitalize">Oda Sayisi</h3>
              <select
                className="border-2 border-gray-400 rounded-sm w-full md:w-32"
                name="bedrooms"
                id="bedrooms"
                onChange={handleSelectChange}
                value={selectedOption}
              >
                <option value="1">2</option>
                <option value="2">3 ve ya 4</option>
                <option value="3">4-den daha cok</option>
              </select>
            </div>
            <div className="searching-item-3 mb-4 md:mb-0">
              <h3 className="capitalize">Sehir</h3>
              <select
                className="border-2 border-gray-400 rounded-sm w-full md:w-32"
                name="city"
                id="city"
              >
                <option value="Istanbul">Istanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="Izmir">Izmir</option>
                <option value="Antalya">Antalya</option>
                <option value="Edirne">Edirne</option>
                <option value="Bodrum">Bodrum</option>
              </select>
            </div>
            <div className="searching-item-4 mx-0 md:mx-8 mb-4 md:mb-0">
              <h3 className="capitalize">HomeType</h3>
              <select
                className="border-2 border-gray-400 rounded-sm w-full md:w-32"
                name="homeType"
                id="homeType"
              >
                <option value="single Family">Single Family</option>
                <option value="CONDO">CONDO</option>
              </select>
            </div>
            <div className="searching-item-5 mb-4 md:mb-0">
              <h3 className="capitalize">Fiyat</h3>
              <div className="price flex flex-col md:flex-row">
                <input
                  type="number"
                  placeholder="0'dan"
                  className="border-2 border-gray-400 rounded-sm w-full md:w-32 mb-2 md:mb-0"
                  onChange={handlePriceChange}
                  name="min"
                  value={priceRange.min}
                />
                <input
                  type="number"
                  placeholder="1000000000'a"
                  className="border-2  border-gray-400 rounded-sm w-full md:w-32"
                  onChange={handlePriceChange}
                  name="max"
                  value={priceRange.max}
                />
              </div>
            </div>
            <div className="searching-item-6  ml-16 mr-24 mt-4 mb-4 md:mb-0">
              <button
                className="w-full md:w-24 h-12 rounded-2xl text-white bg-orange-600"
                onClick={handleFilter}
              >
                <CiSearch className="relative left-2 top-3 text-2xl" />
                <span className="relative text-2xl top-[-18px] left-2">
                  Ara
                </span>
              </button>
            </div>
            <div className="clean-filter mt-4 md:mt-16 ml-0 md:ml-[-107.5%]">
              <p className="flex" onClick={handleResetFilters}>
                <FaRegTrashAlt />
                <span className="mt-[-3px] ml-2 cursor-pointer">
                  Tüm filterleri sıfırla
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {showFilteredChoice && (
        <div className="filteredData mb-32">
          <div className="sticker-heading flex flex-col md:flex-row justify-between px-10 md:px-[302px] mb-12">
            <div className="texting">
              <h1 className="text-4xl capitalize mb-2 ml-[-1px-pointer">
                Filtered Choice
              </h1>
              <p className="text-sm">Filter sonuclari</p>
            </div>
          </div>
          <FilteredData data={filteredData} />
        </div>
      )}
    </div>
  );
};

export default Header2;
