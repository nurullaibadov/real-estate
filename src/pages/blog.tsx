import React from "react";
import Header from "../components/Header/header";
import Header2 from "../components/Header/header2";
import Footer from "../components/Footer/footer";
import Footer2 from "../components/Footer/footer2";
import { CiSearch } from "react-icons/ci";
import decore2 from "../assets/decore2.png";
import decore3 from "../assets/decore3.png";
import decore4 from "../assets/decore4.png";
import decore5 from "../assets/decore5.png";
import decore6 from "../assets/decore6.png";
import decore7 from "../assets/decore7.png";
import decore8 from "../assets/decore8.png";
import decore9 from "../assets/decore9.png";
import img from "../assets/idkd.png";

const Blog: React.FC = () => {
  return (
    <div>
      <Header />
      <div
        className="blogHeader mb-2 pt-44 pb-2"
        style={{ backgroundColor: "#fdf0ea" }}
      >
        <Header2 />
      </div>
      <main>
        <div className="mainHeading mt-8">
          <h1 className="text-3xl ml-8 sm:ml-52 text-blue-950 font-bold">
            Blog
          </h1>
          <p className="text-md ml-8 md:ml-52 mb-8 mt-2 ">Anasayfa / Blog</p>
        </div>
        <div className="sections flex flex-col sm:flex-row sm:px-52">
          <div className="LeftSection-separate mb-24 sm:mb-0 sm:mr-8">
            <div className="blogCard9 border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={decore9} alt="decore9" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">Satılık</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Tadonar Oskar Eliasson. Interaktiv skrivtavla mussade.
                </p>
                <p className="text-[12px] pb-4">
                  Multibelt Caroline Olsson. Pneumativ vyspesm. Fase Gunnel
                  Norberg. Trang douche. Fotostat. Prokemi. Heteronar Siv
                  Björklund. Reng vårdvisare. Decispev intrask.
                </p>
              </div>
            </div>
            <div className="blogCard3 my-8 border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={decore3} alt="decore3" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">Villa</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Kalkstenssångare betalskugga blåljuspersonal. Ting givomat.
                </p>
                <p className="text-[12px] pb-4">
                  Tridovis astron. Gäs polyvis. Hått makron. Åt Rune Karlsson.
                  Permodern. Thomas Lindberg barriärvård. Krosade trede.
                  Zlatanera Astrid Blom. Pasulingar Lars Wallin.
                </p>
              </div>
            </div>
            <div className="blogCard10  border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={img} alt="img" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">Kiralık</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Kompetenstrappa kravallant såväl som järtad. Köttrymden
                  blogga.
                </p>
                <p className="text-[12px] pb-4">
                  Kongram. Spett förväntningssamhälle. Eurovidetide detes.
                  Stenod. Pånera logoception. Sitskate dore. Prede grönt
                  körfält. Episkapet posa. Stenorade polyfiering.
                </p>
              </div>
            </div>
            <div className="blogCard7 my-8 border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={decore7} alt="decore7" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">Daire</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Trafikmaktordning cookie dodong. Kopimism timellare.
                </p>
                <p className="text-[12px] pb-4">
                  Suprasofi koren. Multinat dysnetik. Madeleine Ekström pojusk.
                  Olov Sandberg. Neras resyhiren. Pseudokasat. Särar. Ekotopi
                  mandatpingis. Oskar Ström sende.
                </p>
              </div>
            </div>
            <div className="blogCard6 border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={decore6} alt="decore6" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">Yazlık</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Faral klimatvänlig. Fakror bloppis.
                </p>
                <p className="text-[12px] pb-4">
                  Juktig tvillingshoppare. Kontrasängen. Nit Linnea Magnusson.
                  Ludade reaitet. Lådvinsalkoholism semifiering. Margareta
                  Lindberg metatos. Kuhisade. Emil Gunnarsson prenat. Prenat
                  rabelt.
                </p>
              </div>
            </div>
            <div className="blogCard4 my-8 border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={decore4} alt="decore4" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">Daire</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Reacentrism nyhetsundvikare bonus malus. Grit geodäräskapet.
                </p>
                <p className="text-[12px] pb-4">
                  Os. Amanda Andersson. Annika Martinsson. Transtopi konera.
                  Muligt. Teaktiv William Åberg. Bebur. Ekotism. Glaskulefolket
                  Michael Lindqvist.
                </p>
              </div>
            </div>
            <div className="blogCard5 border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={decore5} alt="decore5" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">Yazlık</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Rallylydnad Anette Larsson resofi. Alf foliehatt Signe
                  Andersson.
                </p>
                <p className="text-[12px] pb-4">
                  Biont möngar. Agnostifiering prekoning. Tel Julia Nordström.
                  Fonovision. Håpärar. Denenera. Garanterad traditionell
                  specialitet. Ohoheten. Red doskapet.
                </p>
              </div>
            </div>
            <div className="blogCard2 my-8 border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={decore2} alt="decore2" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">İllegal</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Demiosmos koldioxidbanta. Myd sajuktig.
                </p>
                <p className="text-[12px] pb-4">
                  Emanuel Lundström konvertering. Lasped Felicia Bergman. Vande.
                  Ananing judat. Kagylig Kjell Johnsson. Varat eur. Ida Ekström
                  pesk. Siv Ali. Laras ora.
                </p>
              </div>
            </div>
            <div className="blogCard8 border-2 border-gray-200 w-full sm:w-[600px] rounded-xl">
              <img className="w-full rounded-xl" src={decore8} alt="decore" />
              <div className="texting px-4">
                <p className="pt-4 text-sm">Daire</p>
                <p className="text-xl py-2 font-bold text-blue-950">
                  Tetraluhet fara. Kunade ryggplankning.
                </p>
                <p className="text-[12px] pb-4">
                  Victoria Fredriksson posm. Ingvar Larsson filologi.
                  Agnostiskop Victoria Jansson. Filodiktisk. Platta till kurvan.
                  Fabonera ror. Fål mytostik. Geofencing kesarar. Pseudologi.
                </p>
              </div>
            </div>
          </div>
          <div className="mr-8 rightSection-separate md:ml-[-40px] pl-4 sm:pl-32 mt-8 sm:mt-0">
            <div className="pt-7 rounded-xl pl-2 searching flex border-2 border-gray-100 w-full sm:w-96 h-24">
              <CiSearch className="relative top-3 text-xl left-6" />
              <input
                type="text"
                className="py-2 px-8 w-full sm:w-80 h-10 border-2 rounded-md"
                placeholder="Ne arıyorsun?"
              />
            </div>
            <div className="categories px-8 mt-6 border-2 rounded-xl border-gray-200 py-12">
              <h1 className="text-xl mb-4 text-blue-950 font-bold">
                Kategoriler
              </h1>
              <p>Daireler</p>
              <p className="py-2">Evler</p>
              <p>Ofis</p>
              <p className="py-2">Villa</p>
              <p>Rezidanz</p>
            </div>
            <div className="lastPosts border-2 border-gray-100 mt-6 rounded-xl px-4 py-8">
              <h1 className="text-xl font-bold text-blue-950 mb-4">
                Son Gönderiler
              </h1>
              <div className="post-1 flex">
                <img
                  src={decore9}
                  className="w-28 rounded-xl h-28"
                  alt="decore9"
                />
                <div className="ml-2 post-text1">
                  <p className="text-md mt-2 w-[104%] text-blue-950 font-semibold">
                    En İyi Kanadalıyı Açıkladı Bisiklet ve Yürüyüş için Şehirler
                  </p>
                  <p className="mt-2 text-gray-600">3 Ekim 2023</p>
                </div>
              </div>
              <div className="post-2 my-4 flex">
                <img
                  className="w-28 rounded-xl h-28"
                  src={decore3}
                  alt="decore3"
                />
                <div className="ml-2 mt-1 post-text1">
                  <p className="text-md mt-2 w-[70%] text-blue-950 font-semibold">
                    Elmas Malikanesi Yeni Dairede…
                  </p>
                  <p className="mt-2 text-gray-600">3 Ekim 2023</p>
                </div>
              </div>
              <div className="post-3 flex">
                <img className="w-28 rounded-xl h-28" src={img} alt="img" />
                <div className="ml-2 post-text1 mt-1">
                  <p className="text-md mt-2 w-[120%] text-blue-950 font-semibold">
                    Saklamanın 7 Basit Yolu Çocuklarınızın Oyuncakları
                  </p>
                  <p className="mt-2 text-gray-600">3 Ekim 2023</p>
                </div>
              </div>
            </div>
            <div className="famousSticker border-2 border-gray-100 rounded-xl mt-6 px-6 py-16">
              <h1 className="text-xl font-bold text-blue-950">
                Popüler etiketler
              </h1>
              <div className="top-btn mt-4">
                <button className="border-2 border-gray-300 pb-3 px-6 py-2 text-xl text-blue-950 font-bold rounded-3xl">
                  Daireler
                </button>
                <button className="border-2 ml-12 border-gray-300 pb-3 px-6 py-2 text-xl text-blue-950 font-bold rounded-3xl">
                  Kiralık
                </button>
              </div>
              <div className="bottom-btn mt-4">
                <button className="border-2 border-gray-300 pb-3 px-4 py-2 text-xl text-blue-950 font-bold rounded-3xl">
                  Satılık
                </button>
                <button className="border-2 mx-8 border-gray-300 pb-3 px-4 py-2 text-xl text-blue-950 font-bold rounded-3xl">
                  Villa
                </button>
                <button className="border-2 border-gray-300 pb-3 px-4 py-2 text-xl text-blue-950 font-bold rounded-3xl">
                  Yazlık
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="empty mt-12"></div>
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Blog;
