"use client";

import { Section, TextUnderline, Title } from "@/app/components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import { Testimonial } from "@/domain/models/testimonial";

SwiperCore.use([Pagination]);

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      image: "/images/testimonials/avatar.png",
      name: "John Doe",
      position: "CEO, someCompany",
      testimonial:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est",
    },
    {
      image: "/images/testimonials/avatar.png",
      name: "John Doe",
      position: "CEO, someCompany",
      testimonial:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est",
    },
  ];

  return (
    <Section className="py-20 bg-primary" id="testimonials">
      <Title className="text-white">
        WHAT{" "}
        <TextUnderline className={"decoration-white"}>
          OUR CLIENTS SAY
        </TextUnderline>{" "}
        ABOUT US
      </Title>

      <div className="mt-8">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={testimonial.name + "-" + i}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Testimonials;
