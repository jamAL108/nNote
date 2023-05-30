import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
    setCurrentX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setCurrentX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const difference = startX - currentX;
    const threshold = 100; // Adjust the threshold as needed

    if (difference > threshold) {
      setIsOpen(false);
    } else if (difference < -threshold) {
      setIsOpen(true);
    }
  };

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Content of your sidebar */}
    </div>
  );
};

export default Sidebar;
