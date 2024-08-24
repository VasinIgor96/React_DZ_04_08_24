import React from 'react';

const PersonalInfo = ({ name, phone, email, city, experience, skills, photo }) => {
  return (
    <div>
      <img src={photo} alt={name} style={{ width: '150px', borderRadius: '50%' }} />
      <h1>{name}</h1>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Skills:</strong> {skills.join(', ')}</p>
    </div>
  );
};

export default PersonalInfo;
