import { OpenQuote } from "@/assets/icons";
import { Testimonial } from "@/domain/models/testimonial";
import Image from "next/image";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="relative py-16">
      <div className="flex flex-row py-12 px-20 bg-white text-black justify-center items-center rounded-xl ">
        {/* decoration */}
        <span className="absolute text-primary top-16 px-20 left-40 -translate-y-1/2">
          <OpenQuote />
        </span>
        <span className="absolute text-primary mx-auto py-12 translate-y-8 rotate-180 bottom-0">
          <OpenQuote />
        </span>

        {/* content */}
        <div className="text-center">
          <div className="rounded-full w-40 h-40">
            <Image
              className="w-full h-full object-cover"
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-base font-semibold mt-2">{testimonial.name}</h3>
          <p>{testimonial.position}</p>
        </div>

        <p className="pl-20 text-2xl py-20">{testimonial.testimonial}</p>
      </div>
    </div>
  );
}
