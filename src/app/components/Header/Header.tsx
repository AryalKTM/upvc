'use client';
import Image from 'next/image';
import Navigation from './Navigation';
import Logo from '@/assets/images/logo.png';
import ContactUsForm from '../ContactUsForm/ContactUsForm';
import { useState } from 'react';
import { AnimatePresence} from 'framer-motion';
import { Close, Menu } from '@/assets/icons';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [contactForm, setShowContactForm] = useState(false);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const togglePopUp = () => {
    setPopUpIsOpen((prev) => !prev);
  };
  const [isOpen, setIsOpen] = useState(false);

  const profiles = [
    {
      image: '/images/productMap/Frame 48.svg',
    },
    {
      image: '/images/productMap/Frame 49.svg',
    },
    {
      image: '/images/productMap/Frame 50.svg',
    },
    {
      image: '/images/productMap/Frame 51.svg',
    },
    {
      image: '/images/productMap/Frame 52.svg',
    },
    {
      image: '/images/productMap/Frame 53.svg',
    },
    {
      image: '/images/productMap/Frame 54.svg',
    },
    {
      image: '/images/productMap/Frame 55.svg',
    },
    {
      image: '/images/productMap/Frame 56.svg',
    },
    {
      image: '/images/productMap/Frame 57.svg',
    },
    {
      image: '/images/productMap/Frame 58.svg',
    },
    {
      image: '/images/productMap/Frame 59.svg',
    },
    {
      image: '/images/productMap/Frame 60.svg',
    },
    {
      image: '/images/productMap/Frame 61.svg',
    },
    {
      image: '/images/productMap/Frame 62.svg',
    },
    {
      image: '/images/productMap/Frame 63.svg',
    },
    {
      image: '/images/productMap/Frame 64.svg',
    },
    {
      image: '/images/productMap/Frame 65.svg',
    },
    {
      image: '/images/productMap/Frame 66.svg',
    },
    {
      image: '/images/productMap/Frame 67.svg',
    },
    {
      image: '/images/productMap/Frame 68.svg',
    },
    {
      image: '/images/productMap/Frame 69.svg',
    },
    {
      image: '/images/productMap/Frame 70.svg',
    },
  ];

  return (
    <>
      <header className="bg-primary text-white sticky top-0 z-50 shadow-md"> {/* Added sticky and z-index */}
        <nav className="flex flex-row justify-between items-center container mx-auto py-2 px-4">
          <div>
            <Image src={Logo} alt="UPVC" width={48} height={65} />
          </div>
          <div>
            <ul className="lg:flex flex-row gap-10 font-medium text-xl hidden">
              <Navigation close={() => {}} togglePopUp={togglePopUp} />
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
              className={clsx('lg:hidden w-9 h-9 text-white')}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <AnimatePresence>
                <motion.span
                  initial={{ opacity: 0, translateX: '-100%' }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: '100%' }}
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
                initial={{ clipPath: 'circle(10px at 100% 0)' }}
                animate={{ clipPath: 'circle(200vh at 100% 0)' }}
                exit={{ clipPath: 'circle(10px at 100% 0)' }}
                className="bg-primary absolute inset-0 z-10"
              ></motion.div>
              <button
                className={clsx(
                  'w-9 h-9 text-white absolute z-30 top-6 right-10 '
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
                exit={{ opacity: 0 }}
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
      {popUpIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-screen z-[90]">
          <div className="relative bg-white h-5/6 w-10/12 rounded-lg">
            <div className="flex flex-col gap-2 items-center bg-white p-4 rounded-lg shadow-lg w-full overflow-y-auto h-full no-scrollbar">
              <button
                className="absolute lg:top-7 lg:right-7 top-4 right-4 font-bold lg:w-5 lg:h-5 w-3 h-3 ml-auto"
                onClick={togglePopUp}
              >
                {<Close />}
              </button>
              <h1 className="font-bold lg:text-3xl text-xl p-2 lg:mt-7 mt-2">
                UPVC Profiles
              </h1>
              <p className="lg:text-lg text-sm lg:pt-2">
                Find the ideal profile to match your build.
              </p>
              <div className="flex lg:flex-row lg:flex-wrap lg:p-7 lg:m-8 lg:mt-0 z-0 flex-col lg:gap-6 gap-2 lg:justify-around">
                {profiles.map((profile, index) => (
                  <Image
                    key={index}
                    className={`object-contain lg:basis-2/5 lg:m-2 lg:p-7 p-5 border-black border-[1px] `}
                    src={profile.image}
                    alt={'error'}
                    width={230}
                    height={230}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;