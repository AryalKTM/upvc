"use client";
import Image from "next/image";
import Navigation from "./Navigation";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import { useState } from "react";
import { AnimatePresence, animate } from "framer-motion";
import { Close, Menu } from "@/assets/icons";
import { motion } from "framer-motion";
import clsx from "clsx";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [contactForm, setShowContactForm] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-primary text-white">
        <nav className="flex flex-row justify-between items-center container mx-auto py-2 px-4">
          <div>
            <Image src={Logo} alt="UPVC" width={48} height={65} />
          </div>
          <div>
            <ul className="lg:flex flex-row gap-10 font-medium text-xl hidden">
              <Navigation close={() => {}} />
            </ul>
          </div>
          <div>
            <button
              className="py-2 px-5 border-white border-2 rounded-lg font-bold text-xl hover:bg-white hover:text-primary transition-colors duration-500 lg:block hidden"
              onClick={() => setShowContactForm(true)}
            >
              Contact Us
            </button>

            <button
              className={clsx("lg:hidden w-9 h-9 text-white")}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <AnimatePresence>
                <motion.span
                  initial={{ opacity: 0, translateX: "-100%" }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: "100%" }}
                >
                  <Menu />
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <nav className="fixed inset-0 w-screen h-screen z-50">
              <motion.div
                initial={{ clipPath: "circle(10px at 100% 0)" }}
                animate={{ clipPath: "circle(200vh at 100% 0)" }}
                exit={{ clipPath: "circle(10px at 100% 0)" }}
                className="bg-primary absolute inset-0 z-10"
              ></motion.div>
              <button
                className={clsx(
                  "w-9 h-9 text-white absolute z-30 top-6 right-10 "
                )}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Close />
              </button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                className="relative z-20 flex flex-col text-4xl gap-9 px-7 list-none mt-36"
              >
                <Navigation close={() => setIsOpen(false)} />
              </motion.div>
            </nav>
          )}
        </AnimatePresence>
      </header>
      <AnimatePresence>
        {contactForm && <ContactUsForm setShow={setShowContactForm} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
