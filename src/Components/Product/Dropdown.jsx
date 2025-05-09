import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Dropdown = ({ options = [], onSelect, title }) => {
  const [selectedOption, setSelectedOption] = useState(options[0] || 1);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative w-full text-left" tooltip={title}>
      <div
        className="quantity-button flex items-center justify-between border-2 border-[#016533] rounded-lg px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#016533] font-bold">{selectedOption}</span>
        <FaCaretDown color="#016533" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer px-4 py-2 text-[#016533] hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
