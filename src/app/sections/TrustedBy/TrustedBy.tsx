import { TextUnderline, Title } from "@/app/components";
import Image from "next/image";
const icons = [
  {
    name: "Bhatbhateni",
    url : "https://youtube.com/",
    icon: '/images/trustedby/bhatbhateni_png.png'
  },

  {
    name: "Hotel Tibet",
    url : "dwit.com",
    icon: '/images/trustedby/hotel_tibet_png.png'
  },
  
  {
    name: "Lo Mustang Hotel",
    url : "abc.com",
    icon: '/images/trustedby/lo_mustang_hotel_png.png'
  },


]
const TrustedBy = () => {
  return (
    <section className="py-20" id="trusted-by">
      <Title>
        <TextUnderline>TRUSTED</TextUnderline> BY
      </Title>
      <br></br>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 justify-center mt-20 items-center">
      {icons.map((icon=>(
        <a href={icon.url}>
          
            <Image className="object-contain" src={icon.icon} alt={"error"} width={150} height={150}></Image>
        </a>
      )))}
      </div>
    </section>
  );
};

export default TrustedBy;
