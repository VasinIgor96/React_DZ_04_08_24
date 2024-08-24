import React from 'react';

const PetInfo = ({ name, species, age, photo }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p><strong>Species:</strong> {species}</p>
      <p><strong>Age:</strong> {age}</p>
      <img src={photo} alt={name} style={{ width: '300px', height: 'auto' }} />
    </div>
  );
};

export default PetInfo;
