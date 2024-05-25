import Header from "../components/Header/header";
import Header2 from "../components/Header/header2";
import Footer from "../components/Footer/footer";
import Footer2 from "../components/Footer/footer2";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="contactHeader">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385399.3520038004!2d28.682533630611694!3d41.00485195359158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBJc3RhbmJ1bCBpbGksIFTDvHJraXnJmQ!5e0!3m2!1saz!2saz!4v1712850297241!5m2!1saz!2saz"
          width="600"
          height="450"
          loading="lazy"
          style={{}}
        ></iframe>
        <div className="altHeader mt-32 relative top-[-310px]">
          <Header2 />
        </div>
      </div>
      <main>
        <div className="contactWithMe h-[550px] relative top-[-340px] flex flex-col lg:flex-row bg-gray-200">
          <div className="pl-6 pr-6 py-8 contactLeft mx-auto mt-[-50px] w-[90%] lg:w-[880px] lg:ml-52 md:pl-16 pr-0 rounded-xl h-auto lg:h-[500px] pt-8 bg-white">
            <h1 className="text-2xl font-bold">Bizimle İletişime Geçin</h1>
            <p className="py-2 pb-4 text-[12.7px]">
              Bir talep bırakın, uzmanlarımız kısa sürede sizinle iletişime
              geçecektir
            </p>
            <div className="name">
              <p>Ad & Soyad</p>
              <input
                className="border-2 mt-2 py-2 pl-2 w-full lg:w-96 rounded-md border-gray-300"
                type="text"
                placeholder="Adınızı girin..."
              />
            </div>
            <div className="phone pt-4 pb-4">
              <p>Telefon Numarası</p>
              <input
                className="border-2 mt-2 py-2 pl-2 w-full lg:w-96 rounded-md border-gray-300"
                type="tel"
                placeholder="+90(***.***.**.**)"
              />
            </div>
            <div className="mail">
              <p>E-Mail </p>
              <input
                className="border-2 mt-2 py-2 pl-2 w-full lg:w-96 rounded-md border-gray-300"
                type="email"
                placeholder="e-mail adresinizi girin..."
              />
            </div>
            <button className="bg-orange-500 w-full lg:w-96 text-white py-4 rounded-md mt-12">
              Kaydet ve Gönder
            </button>
          </div>
          <div className="rightContact mx-auto mt-12 lg:mt-52 lg:ml-24 text-center lg:text-left">
            <h1 className="text-3xl ml-16 mb-4 w-72 font-bold text-blue-950 md:ml-[-1px]">
              Sizden haber almayı çok isteriz.
            </h1>
            <p className="mt-[-10px] ml-8  w-[80%] lg:w-[53%] mx-auto my-24 lg:mx-0 md:mt-[-10px]">
              Lorem ipsum dolor sit amet consectetur. Quisque ac felis sit neque
              libero. Enim etiam congue a posuere consequat augue nulla. Tortor
              eleifend diam nunc bibendum in. Duis id nunc gravida urna.
            </p>
          </div>
        </div>
        <div className="voyage   lg:mt-[-300px] ">
          <div className="tripHeading text-center mt-[-120px]">
            <h1 className="text-2xl font-bold mb-2">Ofisimizi Ziyaret Edin</h1>
            <p>
              Emlakçı'nın her büyüklükte ve her oturum potansiyeline sahip
              10.000'den fazla ofisi bulunmaktadır.
            </p>
          </div>
          <div className="tripSections flex flex-col lg:flex-row justify-center mt-12 mb-12">
            <div className="trip-1 mb-8 my-20 lg:mb-0 mt-0 text-center lg:text-left">
              <h1 className="font-bold text-2xl">Genel Merkez</h1>
              <p className="my-4 w-44 mx-auto lg:mx-0">
                Mahmutlar Yangılı cad{" "}
                <span className="ml-2"> 11 Alanya / Turkey</span>
              </p>
            </div>
            <div className="trip-2 mx-0 lg:mx-24 mb-8 lg:mb-0 text-center lg:text-left">
              <h1 className="font-bold text-2xl">İletişim Numaralarımız</h1>
              <p className="my-4 w-44 mx-auto lg:ml-12">
                <span className="ml-5">+905441380707</span> info@kinacigroup.com
              </p>
              <div className="socialMedia flex justify-center lg:justify-start lg:ml-24">
                <FaWhatsapp className="text-green-600 text-3xl" />
                <RiTelegramLine className="text-3xl ml-2 text-blue-600" />
              </div>
            </div>
            <div className="trip-3 text-center lg:text-left">
              <h1 className="font-bold text-2xl">Çalışma Saatlerimiz</h1>
              <p className="my-4 w-48 mx-auto lg:ml-3">
                Pazartesi-Cuma: 9:00-19:00{" "}
                <span className="ml-4"> Cumartesi: 10:00-17:00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="teams grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 px-4 lg:px-0">
          <img src={team4} alt="team" className="h-44 w-full object-cover" />
          <img src={team1} alt="team" className="h-44 w-full object-cover" />
          <img src={team2} alt="team" className="h-44 w-full object-cover" />
          <img src={team3} alt="team" className="h-44 w-full object-cover" />
        </div>
        <div
          className="info px-4 lg:px-64 py-12"
          style={{ backgroundColor: "#eaf0f6" }}
        >
          <div className="infoHeader text-center lg:text-left">
            <h1 className="text-2xl font-bold text-blue-950 mb-2">
              Banka Hesap Bilgilerimiz
            </h1>
            <p className="pb-4">
              Emlakçı'nın her büyüklükte ve her oturum potansiyeline sahip
              10.000'den fazla ofisi bulunmaktadır.
            </p>
            <div className="Slices text-center lg:text-left">
              <div className="infoSlice1 mb-4">
                <p>
                  <span className="text-orange-600 font-bold">$</span>: Ad
                  Soyad/Ünvan: KINACI PROPERTY EMLAK İNŞAAT TAAHHÜT TURİZM VE
                  TİC.LTD.ŞTİ
                </p>
                <p className="font-bold text-blue-950">
                  <span className="text-orange-600 font-bold">IBAN:</span>TR42
                  0006 2000 6020 0009 0898 32
                </p>
              </div>
              <div className="infoSlice2 mb-4">
                <p>
                  <span className="text-orange-600 font-bold">€</span>: Ad
                  Soyad/Ünvan: KINACI PROPERTY EMLAK İNŞAAT TAAHHÜT TURİZM VE
                  TİC.LTD.ŞTİ
                </p>
                <p className="font-bold text-blue-950"></p>
                <span className="text-orange-600 font-bold">IBAN:</span>TR85
                0006 2000 6020
                <p className="font-bold text-blue-950">
                  <span className="text-orange-600 font-bold">IBAN:</span>TR85
                  0006 2000 6020 0009 0898 34
                </p>
              </div>
              <div className="infoSlice3">
                <p>
                  <span className="text-orange-600 font-bold">₺</span>: Ad
                  Soyad/Ünvan: KINACI PROPERTY EMLAK İNŞAAT TAAHHÜT TURİZM VE
                  TİC.LTD.ŞTİ
                </p>
                <p className="font-bold text-blue-950">
                  <span className="text-orange-600 font-bold">IBAN:</span>TR13
                  0006 2000 6020 0006 2968 51
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="footing">
        <Footer />
        <Footer2 />
      </div>
    </div>
  );
};
export default Contact;
