import Data from "../data/data";
import furnutare from "../assets/h36.jpg.png";
import DataOffer from "../data/dataoffer";
import DataBestOffer from "../data/databestoffer";
import "../pages/App.css";
import Header from "../components/Header/header";
import Header2 from "../components/Header/header2";
import Footer from "../components/Footer/footer";
import Footer2 from "../components/Footer/footer2";
const Desktop = () => {
  return (
    <div>
      <header>
        <Header />
        <div className="middle-heading bg-black opacity-100 inset-45 text-center sm:text-left">
          <h1 className="ml-0 sm:ml-44 pt-24 mb-8 text-white text-5xl sm:text-7xl w-full sm:w-[70%] md:text-center">
            <span className="block sm:inline">Kalitesini</span> <br />{" "}
            Garantileyen Tesisler
          </h1>
          <p className="text-white text-lg sm:text-2xl ml-0 sm:ml-44 md:ml-96">
            Kınacı Grup, inşaat ve gayrimenkul hizmetleri sektöründe 30 yıllık
            <br />
            <span className="block sm:inline md:ml-32">
              deneyime sahip bir şirketler topluluğudur.
            </span>
          </p>
        </div>
        <Header2 />
      </header>
      <main>
        <section>
          <div className="city-sticker">
            <div className="sticker-heading flex flex-col sm:flex-row justify-between px-8 sm:px-52 mt-[-40px]">
              <div className="texting">
                <h1 className="text-2xl sm:text-4xl capitalize mb-2">
                  Şehirlere Göre İlanlar
                </h1>
                <p className="text-sm">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-4 sm:mt-0">
                Tüm Şehirleri Gör
              </button>
            </div>
            <div className="mr-16 all-part grid grid-cols-2 sm:grid-cols-6 ml-0 sm:ml-52 mt-12 gap-4 sm:gap-x-52">
              <div className="part-1 pt-8">
                <h1 className="text-white text-center text-xl sm:text-3xl">
                  Antalya
                </h1>
                <p className="text-white text-center text-sm">23 Fırsat</p>
              </div>
              <div className="part-2 pt-8">
                <h1 className="text-white text-center text-xl sm:text-3xl">
                  İstanbul
                </h1>
                <p className="text-white text-center text-sm">23 Fırsat</p>
              </div>
              <div className="part-3 pt-8">
                <h1 className="text-white text-center text-xl sm:text-3xl">
                  İzmir
                </h1>
                <p className="text-white text-center text-sm">23 Fırsat</p>
              </div>
              <div className="part-4 pt-8">
                <h1 className="text-white text-center text-xl sm:text-3xl">
                  Aydın
                </h1>
                <p className="text-white text-center text-sm"> Fırsat</p>
              </div>
              <div className="part-5 pt-8">
                <h1 className="text-white text-center text-xl sm:text-3xl">
                  Muğla
                </h1>
                <p className="text-white text-center text-sm"> 23 Fırsat</p>
              </div>
              <div className="part-6"></div>
            </div>
          </div>
        </section>
        <article>
          <div
            className="article-heading pt-12 pb-24 mt-24"
            style={{ backgroundColor: "#eaf3f9" }}
          >
            <div className="article-text-heading flex flex-col sm:flex-row justify-between px-8 sm:px-[110px] md:px-72">
              <div className="article-texting">
                <h1 className="text-xl sm:text-2xl">Yeni Gayrimenkuller</h1>
                <p className="text-sm">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
              <div className="btn flex space-x-4 mt-4 sm:mt-0">
                <button
                  type="button"
                  className="bg-orange-500 w-32 h-8 rounded-xl"
                >
                  Satılık
                </button>
                <button
                  type="button"
                  className="border-2 border-orange-600 rounded-xl bg-white w-32 h-8 text-orange-700 "
                >
                  Kiralik
                </button>
              </div>
            </div>
            <div className="catchData mt-4">
              <Data />
            </div>
          </div>
          <div
            className="campaign-offer mt-10 pb-16"
            style={{ backgroundColor: "#fef1ea" }}
          >
            <div className="sticker-heading flex flex-col sm:flex-row justify-between px-8 sm:px-[305px] mb-12 mt-[-40px] pt-12">
              <div className="texting">
                <h1 className="text-xl sm:text-4xl capitalize mb-2">
                  Kampanyali Gayrimenkuller
                </h1>
                <p className="text-sm">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-4 sm:mt-0">
                Tüm Kampanyaları Gör
              </button>
            </div>
            <DataOffer />
          </div>
          <div
            className="best-offer pt-12 pb-12"
            style={{ backgroundColor: "#eaf3f9" }}
          >
            <div className="sticker-heading flex flex-col sm:flex-row justify-between px-8 sm:px-[305px] mb-12 mt-[-40px] pt-12">
              <div className="texting">
                <h1 className="text-xl sm:text-4xl capitalize mb-2">
                  En İyi Teklifler
                </h1>
                <p className="text-sm">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-4 sm:mt-0">
                Tüm Teklifleri Gör
              </button>
            </div>
            <DataBestOffer />
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
                  className="mt-6 bg-orange-600 max-450:w-[345px] text-white  sm: px-4 py-2 rounded-xl md:bg-orange-600 w-96"
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
          <div className="footer-heading mt-4 mb-8 sm:mt-24 sm:mb-16">
            <div className="sticker-heading flex flex-col sm:flex-row justify-between px-4 sm:px-40 ml-2 sm:ml-9 mr-2 sm:mr-3">
              <div className="texting">
                <h1 className="text-2xl sm:text-4xl capitalize mb-2">
                  Kategoriye göre teklifler
                </h1>
                <p className="text-sm">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-2 sm:mt-0">
                Tüm Teklifleri Gör
              </button>
            </div>
            <div className="cities grid ml-0 sm:ml-[-3%] grid-cols-1 sm:grid-cols-3 px-4 sm:px-60 gap-y-6 py-8 sm:py-16 md:ml-[-80px] gap-x-36">
              <div className="w-96 pic-1 py-4 sm:py-7 px-4 sm:px-6 ">
                <h1 className="text-white text-xl sm:text-2xl capitalize">
                  vatandaslığa uygun evler
                </h1>
                <p className="text-white text-sm">10 Mülk</p>
              </div>
              <div className="ml-0 w-96 pic-2 p-4 sm:p-5">
                <h1 className="text-white text-xl sm:text-2xl capitalize">
                  oturuma uygun evler{" "}
                </h1>
                <p className=" text-white text-sm">1 Özellik</p>
              </div>
              <div className=" ml-0 w-96  pic-3 p-4 sm:p-5">
                <h1 className="text-white text-xl sm:text-2xl capitalize">
                  yeni projeler{" "}
                </h1>
                <p className="text-white text-sm">0 Özellikler</p>
              </div>
              <div className="ml-0 w-96 pic-4 p-4 sm:p-5">
                <h1 className="text-white text-xl sm:text-2xl capitalize">
                  Muğla
                </h1>
                <p className="text-white text-sm">1 Özellik</p>
              </div>
              <div className=" ml-0 w-96 pic-5 p-4 sm:p-5">
                <h1 className="text-white text-xl sm:text-2xl capitalize">
                  Ankara
                </h1>
                <p className="text-white text-sm">2 Özellikler</p>
              </div>
              <div className=" ml-0 w-96 pic-6 py-4 sm:py-7 px-4 sm:px-6">
                <h1 className="text-white text-xl sm:text-2xl capitalize">
                  İzmit
                </h1>
                <p className="text-white text-sm"> 1 Özellik</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer>
        <Footer />
        <Footer2 />
      </footer>
    </div>
  );
};

export default Desktop;
