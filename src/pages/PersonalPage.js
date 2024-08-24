import React from 'react';
import PersonalInfo from '../components/PersonalInfo';

const PersonalPage = () => {
  const person = {
    name: 'John Doe',
    phone: '+1234567890',
    email: 'john.doe@example.com',
    city: 'New York',
    experience: '5 years in web development',
    skills: ['JavaScript', 'React', 'Node.js'],
    photo: 'https://img.freepik.com/free-photo/front-view-happy-man-having-fun_23-2148666529.jpg'
  };

  return (
    <div>
      <PersonalInfo {...person} />
    </div>
  );
};

export default PersonalPage;
