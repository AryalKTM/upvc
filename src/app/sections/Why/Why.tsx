import { IconCard, Section, TextUnderline, Title } from "@/app/components";
import { TickMark } from "@/assets/icons";

const Why = () => {
  const data = [
    {
      title: "Quality Assurance",
      description:
        "We guarantee top-notch uPVC products that are durable, reliable, and built to last.",
    },
    {
      title: "Expertise",
      description:
        "Our team of skilled professionals has extensive experience in delivering exceptional uPVC solutions.",
    },
    {
      title: "Customization",
      description:
        "We offer tailored uPVC options to suit individual needs, ensuring a perfect fit for any project.",
    },
    {
      title: "Timely Delivery",
      description:
        "We prioritize punctuality, delivering our uPVC products on schedule to meet project deadlines.",
    },

    {
      title: "Competitive Pricing",
      description:
        "We provide cost-effective uPVC solutions without compromising on quality or service.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Our focus is on delivering exceptional customer experiences, exceeding expectations at every step.",
    },
    {
      title: "Sustainable Practices",
      description:
        "We are committed to eco-friendly manufacturing processes, minimizing our environmental impact and promoting sustainability.",
    },
    {
      title: "Comprehensive Support",
      description:
        "From initial consultation to post-installation assistance, we offer comprehensive support and guidance throughout the entire project.",
    },
  ];
  return (
    <Section id="why">
      <Title>
        WHY YOU SHOULD <TextUnderline>WORK WITH US</TextUnderline>
      </Title>
      <div className="text-primary flex flex-col lg:flex-row flex-wrap py-11 pb-0 rounded-xl mt-4 lg:mt-16">
        {data.map(({ title, description }, i) => (
          <div className="basis-1/2" key={title + "-" + i}>
            <IconCard
              title={title}
              description={description}
              icon={<TickMark />}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Why;
