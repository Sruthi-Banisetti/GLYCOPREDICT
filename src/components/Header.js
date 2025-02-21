import React, { useState } from 'react';
import './Header.css';
import LoginSignup from './LoginSignup';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="icon">
          <img src="https://i.ibb.co/LZc7pFW/logo.webp"alt="Icon" />
        </div>
        <h1 className="title">Glycopredict</h1>
        <div className="account-icon" onClick={handleOpenModal}>
          <img src="https://img.icons8.com/ios/50/ffffff/user.png" alt="Account Icon" />
        </div>
      </header>

      {/* Conditionally render the LoginSignup component */}
      {isModalOpen && <LoginSignup onClose={handleCloseModal} />}
    </>
  );
};

export default Header;
