import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type DropdownItem = {
  label: string;
  href?: string;
  onClick?: () => void; // Optional click handler
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  close: () => void;
};

const Dropdown = ({ label, items, close }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative">
      <button
        className="flex items-center space-x-2 hover:text-gray-700"
        onClick={toggleDropdown}
      >
        <span>{label}</span>
        <FaChevronDown
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50"
        >
          {items.map((item, index) => (
            <li key={index} className="hover:bg-gray-100">
              {item.onClick ? (
                <button
                  onClick={() => {
                    item.onClick?.();
                    close();
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={close}
                  className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
