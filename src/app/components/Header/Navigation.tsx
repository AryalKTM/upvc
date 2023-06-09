import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <li>
        <Link href="#benefits"> Benefits</Link>
      </li>
      <li>
        <Link href="#why"> Why Us?</Link>
      </li>
      <li>
        <Link href="#projects"> Projects</Link>
      </li>
      <li>
        <Link href="#products"> Products</Link>
      </li>
      <li>
        <Link href="#testimonials"> Testimonials</Link>
      </li>
      <li>
        <Link href="#faq"> FAQ</Link>
      </li>
    </>
  );
};

export default Navigation;
