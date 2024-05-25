import "../../pages/App.css";
import { FiPhone } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <div>
      <div
        className="middle-footer h-auto md:h-40 flex flex-col md:flex-row items-center md:items-start"
        style={{
          backgroundColor: "#fdf0ea",
        }}
      >
        <div className="helping-section px-8 py-4 md:px-48 md:py-8 text-center md:text-left">
          <h1 className="text-2xl w-full md:w-80 font-bold text-gray-800">
            Yardıma mı ihtiyacınız var? Uzmanımızla konuşun.
          </h1>
          <p className="mt-2 text-sm">
            Uzmanlarımızla konuşun veya daha fazla tesise göz atın.
          </p>
        </div>
        <div className="btns py-4 md:py-14 flex flex-col md:flex-row items-center ml-0 md:ml-52">
          <button
            className="border-2 border-orange-700 rounded-xl bg-white text-xl text-orange-700 w-36 h-12 mb-4 md:mb-0"
            type="button"
          >
            Bize Ulaşın
          </button>
          <button
            type="button"
            className="md:ml-4 border-2 border-orange-700 rounded-xl bg-orange-700 text-xl text-white py-2 px-4 w-60 h-12 flex items-center justify-center"
          >
            <FiPhone className="mr-2" />
            +90(544) 138 07 07
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
