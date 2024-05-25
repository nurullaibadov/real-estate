import React from "react";
import Header from "../components/Header/header";
import Header2 from "../components/Header/header2";
import Footer from "../components/Footer/footer";
import Footer2 from "../components/Footer/footer2";
import { CgProfile } from "react-icons/cg";
import { TiPlus } from "react-icons/ti";
import LovelyFamily from "../assets/idkd.png";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import test from "../assets/test1.jpg.png";
import {
  FaLinkedinIn,
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import post from "../assets/post-detail.jpg.png";

const Comment: React.FC = () => {
  return (
    <div className="CommentPage">
      <Header />
      <div
        className="CommentHeader mb-2 pt-44 pb-2"
        style={{ backgroundColor: "#fdf0ea" }}
      >
        <Header2 />
      </div>
      <main className=" commentMain">
        <div className="commentContent">
          <h1 className="text-2xl mt-12 ml-4 md:ml-80 text-blue-950 font-bold">
            Çocuklarınızın Oyuncaklarının Evinizi Ele Geçirmesini Önlemenin 7
            Basit Yolu
          </h1>
          <div className="mb-6 ml-4 md:ml-80 flex commentProfile mt-2">
            <CgProfile className="text-3xl" />
            <p className="mt-1 ml-2 text-sm tracking-widest">
              Yönetici | Lüks Ev, Villa | 3 Ekim 2023
            </p>
          </div>
          <img
            className="rounded-2xl ml-0 md:ml-28 w-full md:w-[1300px] h-[500px]"
            src={LovelyFamily}
            alt="idk"
          />
          <div className="commentParagraph ml-0 md:ml-0">
            <h1 className="ml-4 md:ml-80 text-blue-950 text-xl font-bold mt-8 mb-4">
              1. Dağınıklığı azaltın
            </h1>
            <p className="ml-4 md:ml-80 text-blue-950 mb-2 md:w-[51%] ">
              Lorem ipsum dolor sit amet consectetur. Nisl in sit sollicitudin
              faucibus nisl lectus elementum. Duis tincidunt sed mattis sit
              praesent a. Egestas pellentesque id vestibulum blandit erat arcu.
              Commodo justo odio id magnis pharetra sagittis. Eleifend at eget
              condimentum gravida est. Eu mattis et nulla massa phasellus sit.
            </p>
            <p className="ml-4 md:ml-80 text-blue-950 mb-2 md:w-[51%] ">
              Lorem ipsum dolor sit amet consectetur. Auctor viverra tempus elit
              pellentesque adipiscing cras. Sagittis vulputate in massa lorem
              urna nec consectetur. Et molestie orci sit tincidunt. Dui lacus
              suspendisse amet massa enim posuere scelerisque. Risus lacus
              porttitor neque pharetra aliquet pulvinar scelerisque lobortis.
              Aliquam iaculis egestas integer ac mi. Aliquam augue dolor id
              malesuada praesent sed vitae. In cras consectetur nullam ac. Lorem
              quis rhoncus euismod auctor non. Magnis dui sed volutpat integer
              massa adipiscing semper venenatis placerat. Non sagittis quisque
              eget tincidunt sodales ultrices. Egestas.
            </p>
          </div>
          <div
            className="boxContainer w-96 border-l-4 md:w-[48%] border-l-orange-500 px-4 md:px-24 py-8 ml-4 md:ml-80 my-8"
            style={{ backgroundColor: "#fdf0f3" }}
          >
            <p className="leading-7 md:w-[93%] ">
              Lorem ipsum dolor sit amet consectetur. Vitae id parturient tellus
              pharetra. Fames porttitor viverra vitae nunc volutpat. Maecenas
              lorem.
            </p>
            <p className="mt-2">Brooklyn Simmons</p>
          </div>
          <div className="commentBottom ml-4 md:ml-80">
            <h1 className="text-2xl font-bold text-blue-950">
              2. Oyuncakları akıllıca seçin
            </h1>
            <div className="narrativeSection py-6 flex flex-col md:flex-row">
              <div className="leftNarrative ml-0 md:ml-0">
                <div className="narrative-1 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum nirat telev dyn. </p>
                </div>
                <div className="narrative-2 mt-4 mb-8 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum stuprörspolitik kroligen. </p>
                </div>
                <div className="narrative-3 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum kontrast kada. </p>
                </div>
                <div className="narrative-4 my-4 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum paras Facebookfest dir trasade. . </p>
                </div>
                <div className="narrative-5 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum tosam rasifierad det vill säga infrak. </p>
                </div>
              </div>
              <div className="RightNarrative ml-0 md:ml-6 mt-4 md:mt-0">
                <div className="narrative-6 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum pologi preheten disesam, Ali Gunnarsson. </p>
                </div>
                <div className="narrative-7 my-4 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum uberisering sohet. </p>
                </div>
                <div className="narrative-8 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum begen tobleronepolitik duvura tills uras. </p>
                </div>
                <div className="narrative-9 my-4 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>
                    Lörem ipsum filoception krofask då vilokanade, decisaktigt.{" "}
                  </p>
                </div>
                <div className="narrative-10 flex">
                  <GiConfirmed className="mt-1 bg-orange-100 mr-2" />
                  <p>Lörem ipsum deligt våvål. </p>
                </div>
              </div>
            </div>
            <img
              className="mt-4 mb-8 ml-[-5px] w-full md:w-[770px]"
              src={post}
              alt="idk"
            />
          </div>
          <div className="thirdAdvice ml-4 md:ml-80">
            <h1 className="text-blue-950 font-bold text-xl">
              3. Bazı oyuncakları ulaşamayacağınız bir yerde bırakın
            </h1>
            <ul>
              <li className="mt-4 mb-10 text-blue-950">
                Lörem ipsum kontyp Anette Björklund: bement i trefetehet.{" "}
              </li>
              <li className="mb-6 text-blue-950">
                Lörem ipsum arvid Holm kun i dolingar, mikrofas ös, gångpeng.{" "}
              </li>
              <li className="mb-12 text-blue-950">
                Lörem ipsum ebba Lundqvist kontrarat makroplaliga det vill säga
                Inga Henriksson i exopose, Emanuel Dahlberg: såväl som päpona.{" "}
              </li>
            </ul>
            <hr className="mb-10 w-full  md:w-[750px]" />
            <div className="shareSection flex flex-col md:flex-row justify-between mb-12">
              <div className="socialMedia  mt-2 flex">
                <h1>Bu gönderiyi paylaş :</h1>
                <FaFacebookF className="mt-1 ml-4" />
                <FaTwitter className="mx-4 mt-1" />
                <FaLinkedinIn className="mt-1" />
                <FaPinterestP className="mx-4 mt-1" />

                <TiPlus className="mt-1" />
              </div>
              <div className="rent mt-4 md:mt-0 ml-4 md:mr-[37%]">
                <button className="bg-orange-100 px-4 py-2 rounded-2xl font-bold text-blue-950">
                  Kiralık
                </button>
                <button className=" mx-4 bg-orange-100 px-4 py-2 rounded-2xl font-bold text-blue-950">
                  Ev
                </button>
                <button className="bg-orange-100 px-4 py-2 rounded-2xl font-bold text-blue-950">
                  Villa
                </button>
              </div>
            </div>
            <hr className="mb-10 w-full  md:w-[750px] " />
            <div className="adminstrator flex ml-4 md:ml-0 mb-8">
              <CgProfile className="text-8xl text-gray-400" />
              <div className="Boss ml-6 mt-1 ">
                <h1 className="capitalize font-bold text-blue-950">yönetici</h1>
                <p className="mt-4 w-full md:w-[63%]">
                  Lörem ipsum ovolig. Bedovis sev att fototopi i Ingrid
                  Jakobsson i eda Sonja Johansson Oscar Falk. Lebunat termoism
                  psykopatologi. Vul frisparkssprej dobågen.{" "}
                </p>
              </div>
            </div>
            <hr className="mb-10 w-full  md:w-[750px]" />
            <div className="historyPosts flex flex-col md:flex-row justify-between mb-12">
              <div className="previosPost ml-4 md:ml-0">
                <div className="before flex">
                  <MdNavigateBefore className="mt-1" />
                  <h1 className="ml-2 font-bold text-blue-950">
                    Önceki Gönderi
                  </h1>
                </div>
                <p>En Çok Değişen Konut Piyasası…</p>
              </div>
              <div className="nextPosts mr-4 md:mr-[430px]">
                <div className="after flex">
                  <h1 className="ml-20 font-bold text-blue-950 md:">
                    {" "}
                    Sonraki Gönderi
                  </h1>
                  <MdNavigateNext className="mt-1" />
                </div>
                <p>En Çok Değişen Konut Piyasası…</p>
              </div>
            </div>
            <hr className="mb-10 w-full  md:w-[750px]" />
            <div className="comments ml-0 md:ml-0">
              <div className="Number1">
                <div className="top-comment mb-8">
                  <h1 className="font-bold text-blue-950 text-xl">2 Yorum</h1>
                </div>
                <div className="middle-comment">
                  <div className="profile flex justify-between">
                    <div className="profile-part flex">
                      <img
                        src={test}
                        alt="idk"
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="profileRight mt-2 ml-6 ">
                        <p className="font-bold text-blue-950">Hira</p>
                        <p>3 Ekim 2023</p>
                      </div>
                    </div>
                    <p className="mt-2 ml-20 text-teal-500 mr-[440px]">
                      Cevapla
                    </p>
                  </div>
                  <div className="bottom-comment mt-4 mb-12 w-full md:w-[63%]">
                    Lörem ipsum kongraf enveckasförsvar, inte denade lehet.
                    Spena paranetik, demosion intrade Johannes Olofsson. Kade
                    ukroren Josefin Fredriksson Ove Lundgren Anneli Olofsson.
                    Isasera metastat ovuskade ben Chris Björk.
                  </div>
                </div>
              </div>
              <hr className="mb-10 w-full  md:w-[750px]" />
              <div className="number2">
                <div className="middle-comment">
                  <div className="profile flex justify-between">
                    <div className="profile-part flex">
                      <CgProfile className="text-6xl" />
                      <div className="profileRight mt-2 ml-6">
                        <p className="font-bold text-blue-950">Selçuk Aker</p>
                        <p>3 Ekim 2023</p>
                      </div>
                    </div>
                    <p className="mt-3 text-teal-500 mr-[440px]">Cevapla</p>
                  </div>
                  <div className="bottom-comment mt-4 mb-12 w-full md:w-[67%]">
                    Lörem ipsum kvasimeter delogi prenera. Leleska mirtad Kurt
                    Sjöberg Magdalena Svensson. Asesade rerasm. Democentrism
                    Märta Larsson retailtainment.
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-10 w-full md:w-[750px]" />
            <div className="addComment  md:ml-0">
              <h1 className="text-xl font-bold text-blue-950">Yorum Yap</h1>
              <div className="addinfo mb-4 flex flex-col md:flex-row">
                <div className="fullName md:mr-8">
                  <p className="text-blue-950 mt-4 mb-2">İsim</p>
                  <input
                    className="border-2 py-2 px-4 rounded-xl w-full md:w-[360px]"
                    type="text"
                    placeholder="İsim giriniz"
                  />
                </div>
                <div className="email mt-4 md:mt-0">
                  <p className="text-blue-950 mt-4 mb-2">E-posta</p>
                  <input
                    className="border-2 py-2 px-4 rounded-xl w-full md:w-[362px]"
                    type="text"
                    placeholder="E-posta Girin"
                  />
                </div>
              </div>
              <div className="checkBox mb-2 flex">
                <input type="checkbox" />
                <p className="ml-2">
                  Bir dahaki sefere yorum yaptığımda kullanılmak üzere adımı,
                  e-posta adresimi ve web site adresimi bu tarayıcıya kaydet.
                </p>
              </div>
              <div className="remark mb-12">
                <h1 className="text-blue-950 font-bold">Yorum</h1>
                <input
                  className="mt-4 pt-4 mb-8 border-2 pl-4 pb-40 w-full rounded-xl md:w-[800px]"
                  type="text"
                  placeholder="Yorum Girin"
                />
                <br />
                <button className="border-2 border-gray-700 rounded-md px-6 py-2">
                  Yorum Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Comment;
