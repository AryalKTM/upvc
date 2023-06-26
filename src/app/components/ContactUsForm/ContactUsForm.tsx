"use client";
import { AnimatePresence, motion } from "framer-motion";
import ContactUsInput from "./ContactUsInput";
import { Close, Email, Phone } from "@/assets/icons";
import React, { MouseEventHandler, createRef } from "react";

type Props = {
  setShow: (value: boolean) => void;
};

export default function ContactUsForm({ setShow }: Props) {
  const divRef = createRef<HTMLDivElement>();

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === divRef.current) {
      setShow(false);
    }
  };

  return (
    <motion.div
      className="w-screen h-screen fixed bg-opacity-70 bg-black inset-0 grid place-content-center overflow-y-scroll z-50"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={divRef}
    >
      <motion.div
        initial={{ translateY: "-100vh" }}
        animate={{ translateY: 0 }}
        exit={{ translateY: "-100vh" }}
        className="bg-white text-black py-10 px-6 rounded-xl relative"
      >
        <span
          className="absolute right-6 top-6 cursor-pointer"
          onClick={() => setShow(false)}
        >
          <Close />
        </span>

        <h2 className="font-bold text-3xl text-center">CONTACT US</h2>

        <form className="w-96">
          <ContactUsInput id="name" label="Name" name="name" type="text" />

          <ContactUsInput id="email" label="Email" name="email" type="email" />

          <ContactUsInput
            id="phone"
            label="Phone Number"
            name="phone"
            type="text"
          />

          <div>
            <label htmlFor="message" className="text-lg block ">
              Message
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={3}
              className="text-lg border-2 border-black rounded-lg w-full p-2"
            ></textarea>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-primary text-white font-bold text-lg py-3 px-8 rounded-md">
              SEND
            </button>
          </div>
        </form>
        <hr className="mt-4 bg-primary h-[2px] border-0" />
        <div className="text-primary font-medium flex flex-row gap-4 mt-4">
          <p className="flex flex-row gap-2 items-center">
            <span>
              <Email />
            </span>
            roadshowupvc@gmail.com
          </p>
          <p className="flex flex-row gap-2 items-center">
            <Phone /> 981-013-0909
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
