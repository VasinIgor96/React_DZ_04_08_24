import React from 'react';
import ButtonToggle from './components/ButtonToggle';
import NumberInput from './components/NumberInput';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h2>1. Зміна кольору кнопки</h2>
      <ButtonToggle />
      
      <h2>2. Ввід чисел</h2>
      <NumberInput />
      
      <h2>3. Список користувачів</h2>
      <UserList />
    </div>
  );
};

export default App;
