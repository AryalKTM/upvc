"use client";
import { Product } from "@/domain/models/product";
import Image from "next/image";
import { useState } from "react";
import { Close } from "@/assets/icons";
import { ExclamationMark } from "@/assets/icons/ExclamationMark";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);

  const openPopUp = () => {
    setPopUpIsOpen(true);
  };

  const closePopUp = () => {
    setPopUpIsOpen(false);
  };

  return (
    <figure className="flex flex-col w-full lg:w-96 mx-auto z-0">
      <div className="z-0">
        <div className="relative group rounded-xl hover:border-primary hover:rounded-3xl hover:border-8 transition-all ">
          <Image
            src={product.image}
            alt={product.title}
            className="w-full object-cover cursor-pointer rounded-xl"
            width={400}
            height={400}
            onClick={openPopUp}
          />
          <div className="text-primary absolute bottom-6 left-9 hidden group-hover:block text-md font-bold transition-all">
            <div className="flex justify-start">
              <div className="w-6 h-6 mr-2">
                <ExclamationMark />
              </div>
              <p>Click to view all types of profiles</p>
            </div>
          </div>
        </div>
        <figcaption className="mt-4">
          <h3 className="font-bold text-xl lg:text-2xl">{product.title}</h3>
          <p className="mt-4 text-base lg:text-lg">{product.description}</p>
        </figcaption>
      </div>
      {popUpIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-screen z-30">
          <div className="relative bg-white h-5/6 w-10/12 rounded-lg">
            <div className=" flex flex-col gap-2 items-center bg-white p-4 rounded-lg shadow-lg w-full overflow-y-auto h-full no-scrollbar ">
              <button
                className="absolute lg:top-7 lg:right-7 top-4 right-4 font-bold lg:w-5 lg:h-5 w-3 h-3 ml-auto"
                onClick={closePopUp}
              >
                {<Close />}
              </button>
              <h1 className="font-bold lg:text-3xl text-xl p-2 lg:mt-7 mt-2">
                UPVC Profiles
              </h1>
              <p className="lg:text-lg text-sm lg:pt-2">
                Find the ideal profile to match your build.
              </p>
              <div className="flex lg:flex-row lg:flex-wrap lg:p-7 lg:m-8 lg:mt-0 z-0 flex-col">
                {product.profiles.map((profile, index) => (
                  <Image
                    key={index}
                    className="object-contain basis-1/2 lg:p-7 p-5"
                    src={profile.image}
                    alt={"error"}
                    width={280}
                    height={200}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
}
