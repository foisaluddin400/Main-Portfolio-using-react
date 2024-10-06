import gmail from "../assets/gmail.png";
import facebook from "../assets/facebook.png";
import instragram from "../assets/insta.png";
import watsapp from "../assets/watsapp.png";
const Footer = () => {
  return (
    <div className="mt-11 bg-zinc-950">
      <div>
        <div className="grid grid-cols-2 py-6">
          <div className="pt-3">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </div>
          <div className="flex justify-end">
          <div className="flex gap-3">
            <a>
              <img className="w-[45px]" src={facebook} alt="facebook" />
            </a>
            <a>
              <img className="w-[45px]" src={gmail} alt="gmail" />
            </a>
            <a>
              <img className="w-[45px]" src={instragram} alt="instragram" />
            </a>
            <a>
              <img className="w-[45px]" src={watsapp} alt="watsapp" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
