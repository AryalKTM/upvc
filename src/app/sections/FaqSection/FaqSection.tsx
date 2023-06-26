"use client";
import { Section, Title } from "@/app/components";
import { Faq } from "@/domain/models/faq";
import FaqCard from "./components/FaqCard";

import { motion } from "framer-motion";

export default function FaqSection() {
  const faqs: Faq[] = [
    {
      question: "What is uPVC?",
      answer:
        "uPVC stands for unplasticized polyvinyl chloride, a rigid and durable material widely used in the construction industry for windows, doors, and other building components. It is known for its strength, thermal efficiency, low maintenance, and longevity.",
    },

    {
      question: "Is uPVC environmentally friendly?",
      answer:
        "Yes, uPVC is an environmentally friendly material. It is fully recyclable and has a lower carbon footprint compared to other building materials like wood and aluminium. uPVC products also offer better insulation, reducing energy consumption and contributing to sustainable living.",
    },

    {
      question: "How long do uPVC products last?",
      answer:
        "uPVC products are known for their durability and longevity. With proper installation and maintenance, uPVC windows and doors can last for several decades, providing long-term value for your investment.",
    },

    {
      question: "Are uPVC products suitable for all weather conditions?",
      answer:
        "Yes, uPVC products are designed to withstand various weather conditions. They are resistant to rotting, warping, and fading, making them ideal for both hot and humid climates as well as cold and wet environments.",
    },
    {
      question: "Can uPVC be customized to match my design preferences?",
      answer:
        "Absolutely! uPVC products can be customized to match your design preferences. They are available in a wide range of colors, finishes, and styles, allowing you to create the perfect aesthetic for your project.",
    },
  ];

  return (
    <Section id="faq">
      <Title className="text-primary">FAQ</Title>

      <motion.div className="mt-4 lg:mt-16 flex flex-col gap-6 p-5">
        {faqs.map((faq, i) => (
          <div key={i}>
            <FaqCard faq={faq} />
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
