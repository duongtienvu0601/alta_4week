import React, { useState } from 'react';

interface MenuItem {
  title: string;
  link: string;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown__toggle">
        {title} {isOpen ? <span>...</span> : <span>...</span>}

      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          {items.map((item) => (
            <li key={item.link}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
