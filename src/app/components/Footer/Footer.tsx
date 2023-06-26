import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Email, Facebook, Location, Luminr, Phone } from "@/assets/icons";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-5">
        <div className=" py-12 flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-start lg:items-start">
          <div className="lg:basis-1/5 font-medium text-white flex flex-col justify-center items-center lg:items-start">
            <Image src={Logo} alt="Logo" />

            <div className="flex flex-row lg:flex-col mt-8 flex-wrap justify-center">
              <p className="flex flex-row gap-2 items-center basis-1/2 justify-end lg:justify-start p-2">
                <span>
                  <Location />
                </span>{" "}
                Naxal, Kathmandu
              </p>
              <p className="flex flex-row gap-2 items-center basis-1/2 p-2">
                <span>
                  <Email />{" "}
                </span>{" "}
                <a href="mailto:roadshowupvc@gmail.com">
                  {" "}
                  roadshowupvc@gmail.com
                </a>
              </p>
              <p className="flex flex-row gap-2 items-center basis-1/2 justify-end lg:justify-start p-2">
                <span>
                  <Phone />{" "}
                </span>
                <a href="tel:9810130909">981-013-0909</a>
              </p>

              <div className="flex flex-row lg:flex-col items-start gap-3 basis-1/2 p-2">
                <p>Follow us on:</p>
                <div>
                  <a href="">
                    <Facebook />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* map */}
          <div className="basis-4/5 w-full py-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5237366693837!2d85.3776374762231!3d27.731987576168475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b95e615bf89%3A0x2752315947533778!2sRoadshow%20UPVC!5e0!3m2!1sen!2snp!4v1687336324158!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <hr className="h-[2px] my-2 bg-white border-0" />
        <p className="text-center font-medium text-white py-5 flex flex-row items-center gap-3 justify-center">
          &copy; All rights reserved. Powered by{" "}
          <a href="https://luminr.co" className="">
            <Luminr />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
