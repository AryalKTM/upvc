import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-row">
      <Image src="" alt="" width={1000} height={1000} />
      <div>
        <h1>Nepal&apos;s first uPVC Excursion Plant</h1>
        <p>
          Discover Nepal&apos;s first uPVC Excursion Plant, where innovation
          meets quality. Experience superior uPVC solutions for windows, doors,
          and beyond. Step into the future of Nepalese architecture.
        </p>
        <Link href={""}>
          <button>Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
