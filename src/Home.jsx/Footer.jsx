import gmail from "../assets/gmail.png";
import facebook from "../assets/facebook.png";
import instragram from "../assets/insta.png";
import watsapp from "../assets/watsapp.png";
const Footer = () => {
  return (
    <div className="mt-11 bg-zinc-950">
      <div>
        <div className="grid grid-cols-2 py-6">
          <div className="md:pt-3 text-sm">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </div>
          <div className="flex justify-end">
          <div className="flex gap-3">
            <a href="https://www.facebook.com/rh.foisal">
              <img className="md:w-[45px] w-[30px]" src={facebook} alt="facebook" />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <img className="md:w-[45px] w-[30px]" src={gmail} alt="gmail" />
            </a>
            <a href="https://www.instagram.com/rkfoisal330/profilecard/?igsh=ejZvOTg0cWV4dmFj">
              <img className="md:w-[45px] w-[30px]" src={instragram} alt="instragram" />
            </a>
            <a href="https://wa.me/qr/6CPC22VSY26CJ1">
              <img className="md:w-[45px] w-[30px]" src={watsapp} alt="watsapp" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
