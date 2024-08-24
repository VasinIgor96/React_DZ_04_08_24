import React, { useState } from 'react';

const NumberInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setInputValue(value);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        style={{ backgroundColor: isValid ? 'white' : 'red' }}
      />
      <h1>{inputValue}</h1>
    </div>
  );
};

export default NumberInput;
