import FbIcon from "../icons/FbIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstaIcon from "../icons/InstaIcon";
import YouTubeIcon from "../icons/YouTubeIcon";
import EmailIcon from "../icons/EmailIcon";
import PaymentImage from "./PaymentImage";
import LogoIcon from "../icons/LogoIcon";
const Footer = () => {
  return (
    <div className="w-full bg-[url(../assets/footer-bg1.png)] bg-cover bg-no-repeat">
      {" "}
      <div className="flex flex-col items-center gap-10 bg-[rgba(29,35,45,0.6)] px-4 md:px-0">
        <div className="container flex flex-col justify-around gap-24 py-10 text-sm font-normal text-white md:flex-row">
          <div className="flex w-full flex-col gap-6">
            <div className="font-family-forte text-[30px]">
              {" "}
              <LogoIcon />
            </div>
            <div className="text-sm leading-6">
              When you need the best auto parts for your ride, turn to Autovio.
              Limited time offer for only new customer also get free shipping on
              orders.
            </div>
            <div className="flex items-center gap-2 pt-4 pb-4 text-white md:w-1/2 md:pb-10">
              <div className="flex items-center space-x-4">
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
            <div className="text-[21px] font-bold text-white">Locate Us:</div>
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
            <div className="text-[21px] font-bold text-white">
              Get to Know Us:
            </div>
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
            <div className="text-[21px] font-bold text-white">Help Zone:</div>
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
        {/* <div className="container flex flex-col-reverse gap-4 md:flex-row lg:gap-24">
          <div className="flex w-full flex-col-reverse justify-between md:flex-col"></div>
        </div> */}

        <div className="container mx-auto flex w-full flex-col items-center justify-between border-t border-gray-500 py-5 text-white md:flex-row md:items-start">
          <div className="w-full"> &copy; E-commerce. All Rights Reserved</div>
          <div className="flex w-full gap-4">
            <PaymentImage imageSource="/images/Rectangle66.png" width={40} />
            <PaymentImage imageSource="/images/Rectangle67.png" width={40} />
            <PaymentImage imageSource="/images/Rectangle68.png" width={40} />
            <PaymentImage imageSource="/images/Rectangle69.png" width={40} />
            <PaymentImage imageSource="/images/Rectangle70.png" width={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
