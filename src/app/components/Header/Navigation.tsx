type Props = {
  close: () => void
  togglePopUp?: () => void
}
const Navigation = ({ close, togglePopUp }: Props) => {
  return (
    <>
      <li onClick={() => close()}>
        <a href="#trustedby"> Trusted By</a>
      </li>
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
      <li
        className="cursor-pointer"
        onClick={() => togglePopUp && togglePopUp()}
      >
        Profiles
      </li>
    </>
  )
}

export default Navigation
