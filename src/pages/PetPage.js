import React from 'react';
import PetInfo from '../components/PetInfo';

const PetPage = () => {
  const pet = {
    name: 'Buddy',
    species: 'Dog',
    age: 4,
    photo: 'https://zoobonus.ua/storage/news/inner-page/trA8XzIoezDMrQThgQIrugFaPiUE0TWkQUfAgjDx.jpg'
  };

  return (
    <div>
      <PetInfo {...pet} />
    </div>
  );
};

export default PetPage;
