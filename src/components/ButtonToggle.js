import React, { useState } from 'react';

const ButtonToggle = () => {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <button 
      onClick={toggleColor} 
      style={{ backgroundColor: isRed ? 'red' : 'green' }}
    >
      Натисни мене
    </button>
  );
};

export default ButtonToggle;
