import React, { useState } from "react";

const DropdownProfile = ({ username, avatarSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={avatarSrc} alt={username} />
        <span>{username}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownProfile;
