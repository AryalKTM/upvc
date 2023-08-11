"use client";
import { AnimatePresence, motion } from "framer-motion";
import ContactUsInput from "./ContactUsInput";
import { Close, Email, Phone } from "@/assets/icons";
import React, { MouseEventHandler, createRef } from "react";
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from "react-hot-toast";

type Props = {
  setShow: (value: boolean) => void;
};

export default function ContactUsForm({ setShow }: Props) {
  const [state, handleSubmit] = useForm("meqbaggr"); //key should be changed.
  //luminr ko account banayera key halne 
  if (state.succeeded) {
    toast.success("Message sent sucessfully.");
    setShow(false);
 
  } else if (state.result && !state.succeeded) {
    toast.error("Error occured! Please try again later");
    setShow(false);
  } 

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

        <h2 className="font-bold text-3xl text-center contactUs ">CONTACT US</h2>

        <form className="w-96 formElement" onSubmit={handleSubmit}>
          <ContactUsInput id="name" label="Name" name="name" type="text" />
          <ValidationError field="name" prefix="Name" errors={state.errors} />
          <ContactUsInput id="email" label="Email" name="email" type="email" />
          <ValidationError field="email" prefix="Email" errors={state.errors} />

          <ContactUsInput
            id="phone"
            label="Phone Number"
            name="phone"
            type="text"
          />
          <ValidationError field="phone" prefix="Phone" errors={state.errors} />
          <div>
            <label htmlFor="message" className="text-lg block ">
              Message
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={3}
              className="text-lg border-2 border-black rounded-lg w-full p-2"
              name="Message"
            ></textarea>
            
            <ValidationError field="message" prefix="Message" errors={state.errors} />
            </div>
            <div className="flex justify-center mt-4">
            <button className="bg-primary text-white font-bold text-lg py-3 px-8 rounded-md" disabled={state.submitting}>
              
              {(state.submitting)?(<><span>SENDING</span><svg aria-hidden="true" role="status" className="ml-4 inline w-4 h-4 mr-0 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg></> ):<span>SEND</span>
      
    }
              {/* <svg aria-hidden="true" role="status" className="ml-2 inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>  */}
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
