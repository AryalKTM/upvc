"use client";

import { DownArrow } from "@/assets/icons";
import { Faq } from "@/domain/models/faq";
import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  faq: Faq;
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function FaqCard({ faq }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-primary p-4 lg:p-7 rounded-2xl cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-sm lg:text-2xl text-white">{faq.question}</h3>
        <span className={clsx("transition-transform", open && "rotate-180")}>
          <DownArrow />
        </span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            exit={{ height: 0, opacity: 0 }}
            className="font-medium text-xs lg:text-lg text-white"
          >
            <hr className="h-[2px] my-2 bg-white border-0" />

            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
