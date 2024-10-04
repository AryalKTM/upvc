import Dropdown from '../Dropdown/Dropdown';

type Props = {
  close: () => void;
  togglePopUp?: () => void;
};

const Navigation = ({ close, togglePopUp }: Props) => {
  const aboutItems = [
    { label: 'Trusted By', href: '#trustedby' },
    { label: 'Why Us?', href: '#why' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'FAQs', href: '#faq' },
  ];

  const productItems = [
    { label: 'Conservatories', href: '#products' },
    { label: 'Doors', href: '#products' },
    { label: 'Profiles', onClick: togglePopUp }, // Handle Profiles with popup
    { label: 'Skylights', href: '#products' },
    { label: 'Structural Glazing', href: '#products' },
    { label: 'Windows', href: '#products' },
  ];

  return (
    <ul className="flex space-x-6 items-center">
      <li onClick={() => close()} className="hover:text-gray-700">
        <a href="#home">Home</a>
      </li>
      <li onClick={() => close()} className="hover:text-gray-700">
        <a href="#projects">Projects</a>
      </li>
      <Dropdown label="Products" items={productItems} close={close} />
      <Dropdown label="About" items={aboutItems} close={close} />
    </ul>
  );
};

export default Navigation;
