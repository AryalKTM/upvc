import { TextUnderline, Title } from "@/app/components";
import Image from "next/image";

const icons = [
  {
    name: "Roadhshow",
    url: "https://roadshowrealestate.com/",
    icon: "/images/trustedby/roadshow.png",
  },

  {
    name: "Annapurna Cable Car",
    url: "https://www.annapurnacablecar.com.np/",
    icon: "/images/trustedby/annapurnaCableCar.png",
  },

  {
    name: "Bhatbhateni",
    url: "https://www.bbsm.com.np/",
    icon: "/images/trustedby/bhatbhatenilogo.png",
  },

  {
    name: "Hotel De'l Annapurna",
    url: "https://annapurnahotels.com/",
    icon: "/images/trustedby/annapurnaHotell.png",
  },

  {
    name: "Hotel Tibet",
    url: "https://hotel-tibet.com/",
    icon: "/images/trustedby/hotel_tibet_png.png",
  },

  {
    name: "Lo Mustang Hotel",
    url: "https://www.hotellomustang.com/",
    icon: "/images/trustedby/lo_mustang_hotel_png.png",
  },


];
const TrustedBy = () => {
  return (
    <section className="py-20 px-10" id="trustedby">
      <Title>
        TRUSTED BY
      </Title>
      <br></br>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 justify-center mt-20 items-center">
        {icons.map((icon) => (
          <a href={icon.url} key={icon.name}>
            <Image
              className="object-contain"
              src={icon.icon}
              alt={"error"}
              width={`${(icon.name!=="Hotel De'l Annapurna"?(130):170)}`}
              height={130}
            ></Image>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
