import { IconCard, Section, TextUnderline, Title } from "@/app/components";
import {
  Durable,
  Energy,
  Environment,
  Maintainance,
  Security,
  Sound,
} from "@/assets/icons";
import "./Benefits.css";

const Benefits = () => {
  const data = [
    {
      title: "Durable",
      description:
        "uPVC is weather-resistant, rot-proof, and pest-resistant, ensuring long-lasting performance.",
      icon: <Durable className="group-hover:fill-primary group" classNameCircle="group-hover:stroke-primary" />,
    },
    {
      title: "Energy Efficient",
      description:
        "uPVC provides excellent insulation, reducing heating and cooling costs.",
      icon: <Energy className="group-hover:fill-primary group" classNameCircle="group-hover:stroke-primary"/>,
    },
    {
      title: "Environmentally Friendly",
      description:
        "uPVC is recyclable and requires fewer resources compared to alternatives.",
      icon: <Environment className="group-hover:fill-primary group" classNameCircle="group-hover:stroke-primary"/>,
    },
    {
      title: "Low Maintenance",
      description:
        "uPVC requires minimal upkeep, eliminating the need for painting or sealing.",
      icon: <Maintainance className="group-hover:fill-primary group" classNameCircle="group-hover:stroke-primary"/>,
    },
    {
      title: "Safety and Security",
      description:
        "uPVC frames can be reinforced and equipped with multi-point locking systems.",
      icon: <Security className="group-hover:fill-primary group" classNameCircle="group-hover:stroke-primary"/>,
    },
    {
      title: "Sound Insulation",
      description:
        "uPVC's density helps block outside noise, creating a quieter environment.",
      icon: <Sound className="group-hover:fill-primary group" classNameCircle="group-hover:stroke-primary"/>,
    },
  ];

  return (
    <Section className=" px-4" id="benefits">
      <Title>
        BENEFITS OF USING uPVC
      </Title>

      <div className="bg-primary text-white flex flex-col lg:flex-row flex-wrap py-11 px-7 lg:px-24 rounded-xl mt-8 ">
        {data.map(({ title, description, icon }, i) => (
          <div className="basis-1/2" key={title + "-" + i}>
            <IconCard title={title} description={description} icon={icon} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Benefits;
