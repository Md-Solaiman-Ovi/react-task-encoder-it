import FbIcon from "../icons/FbIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstaIcon from "../icons/InstaIcon";
import YouTubeIcon from "../icons/YouTubeIcon";
import EmailIcon from "../icons/EmailIcon";
import PaymentImage from "./PaymentImage";
import LogoIcon from "../icons/LogoIcon";
import PaymentIcons from "../icons/PaymentIcons";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-[url(../assets/footer-bg1.png)] bg-cover bg-no-repeat">
      <div className="flex flex-col items-center bg-[rgba(29,35,45,0.6)] px-4 md:px-0">
        <div className="container mx-auto flex flex-col justify-around gap-8 py-10 text-sm font-normal text-white md:flex-row lg:gap-16 xl:gap-24">
          <div className="flex w-full flex-col gap-6">
            <div className="font-family-forte text-[30px]">
              <LogoIcon />
            </div>
            <div className="text-sm leading-6">
              When you need the best auto parts for your ride, turn to Autovio.
              Limited time offer for only new customer also get free shipping on
              orders.
            </div>
            <div className="flex w-1/3 items-center gap-2 pt-4 pb-4 text-white md:w-2/3 md:pb-10">
              <div className="flex w-full items-center justify-between space-x-4">
                <a
                  href="#"
                  className="text-[rgba(115,127,150,1)] hover:text-[rgba(234,76,73,1)]"
                >
                  <FbIcon />
                </a>
                <a
                  href="#"
                  className="text-[rgba(115,127,150,1)] hover:text-[rgba(234,76,73,1)]"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  className="text-[rgba(115,127,150,1)] hover:text-[rgba(234,76,73,1)]"
                >
                  <InstaIcon />
                </a>
                <a
                  href="#"
                  className="text-[rgba(115,127,150,1)] hover:text-[rgba(234,76,73,1)]"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="text-[21px] font-bold text-white">OUR COMPANY</div>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Delivery
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Legal Notice
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Secure payment
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                About us
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Stores
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="text-[21px] font-bold text-white">OUR SERVICES</div>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Car Diagnostic Tools
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Hand-held Scanners
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Universal Car Diagnostic
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Audi Diagnostic
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                ABS Brake Bleeding
              </a>
              <a
                href="#"
                className="text-[rgba(204,204,204,1)] hover:text-[rgba(234,76,73,1)]"
              >
                Adaptive Front Lighting System
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="text-[21px] font-bold text-white">CONTACT US</div>
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-[rgba(234,76,73,1)]">Address :</span> 126
                Horton Grange Road, Bradford, West Yorkshire, BD7 2DW
              </div>
              <div>
                <span className="text-[rgba(234,76,73,1)]">Phone : </span>  +1
                86.36.166
              </div>
              <div>
                <span className="text-[rgba(234,76,73,1)]">Fax :</span> 126
                12345
              </div>
              <div>
                <span className="text-[rgba(234,76,73,1)]">Mail :</span> 126
                contact@abc.co.uk
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-[rgba(19,39,58,1)]">
          <div className="container mx-auto flex flex-col-reverse items-center justify-center gap-2 py-5 text-white md:flex-row md:items-start md:justify-between">
            <div className="w-full text-center text-[11px] font-normal md:text-start md:text-[15px]">
              Copyright © 2024{" "}
              <span className="text-[rgba(234,76,73,1)]">abc</span> - All Rights
              Reserved.
            </div>
            <div className="flex w-full justify-center gap-4 md:justify-end">
              <PaymentIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
