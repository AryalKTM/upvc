type Props = {
  close: () => void;
};
const Navigation = ({ close }: Props) => {
  return (
    <>
      <li onClick={() => close()}>
        <a href="#benefits"> Benefits</a>
      </li>
      <li onClick={() => close()}>
        <a href="#why"> Why Us?</a>
      </li>
      <li onClick={() => close()}>
        <a href="#projects"> Projects</a>
      </li>
      <li onClick={() => close()}>
        <a href="#products"> Products</a>
      </li>
      <li onClick={() => close()}>
        <a href="#faq"> FAQ</a>
      </li>
    </>
  );
};

export default Navigation;
