"use client";
import { CTAButton, ContactUsForm, Section } from "@/app/components";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/images/hero_image.png";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [contactForm, setShowContactForm] = useState(false);
  return (
    <>
      <section id="home" className="lg:py-20 mx-auto lg:container">
        <div className="flex flex-row items-center relative">
          <div className="rounded-xl lg:basis-1/2 lg:px-10 absolute lg:static z-10 top-0 inset-x-0 w-screen h-[95vh] lg:w-auto lg:h-auto">
            <Image
              src={HeroImage}
              alt=""
              width={1000}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col lg:basis-1/2 px-10 relative z-30 text-white lg:text-black bg-primary bg-opacity-50 lg:bg-white w-screen h-[95vh] lg:w-auto lg:h-auto text-center lg:text-left items-center justify-center lg:items-start">
            <h1 className="font-bold lg:text-6xl text-4xl">
              Nepal&apos;s first uPVC Excursion Plant
            </h1>
            <p className="mt-6 text-base lg:text-xl">
              Discover Nepal&apos;s first uPVC Excursion Plant, where innovation
              meets quality. Experience superior uPVC solutions for windows,
              doors, and beyond. Step into the future of Nepalese architecture.
            </p>
            <div className="mt-12 flex">
              <CTAButton
                text="Contact Us"
                onClick={() => setShowContactForm(true)}
              />
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {contactForm && <ContactUsForm setShow={setShowContactForm} />}
      </AnimatePresence>
    </>
  );
};

export default Hero;
