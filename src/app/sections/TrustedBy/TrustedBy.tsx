import { TextUnderline, Title } from "@/app/components";
import Image from "next/image";

const icons = [
  {
    name: "Bhatbhateni",
    url: "https://www.bbsm.com.np/",
    icon: "/images/trustedby/bhatbhatenii_png .png",
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

  {
    name: "Hotel De'l Annapurna",
    url: "",
    icon: "/images/trustedby/annapurnaHotell.png",
  },

  {
    name: "Annapurna Cable Car",
    url: "https://www.annapurnacablecar.com.np/",
    icon: "/images/trustedby/annapurnaCableCar.png",
  },
];
const TrustedBy = () => {
  return (
    <section className="py-20" id="trustedby">
      <Title>
        <TextUnderline>TRUSTED</TextUnderline> BY
      </Title>
      <br></br>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 justify-center mt-20 items-center">
        {icons.map((icon) => (
          <a href={icon.url} key={icon.name}>
            <Image
              className="object-contain"
              src={icon.icon}
              alt={"error"}
              width={`${(icon.name!=="Hotel De'l Annapurna"?(130):190)}`}
              height={130}
            ></Image>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
