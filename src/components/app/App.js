import React from "react";

import FoodItem from "../food-item";

import './app.sass'

function AppHeader({ title }) {
  return <h1 className="app__header">{ title }</h1>;
}

function AppContent({ children }) {
  return (
    <div className="app__content">
      { children }
    </div>
  );
}

function App() {
  const foodItemsConfig = [
    {
      topInfo: 'Сказочное заморское яство',
      title: 'Нямушка',
      description: 'с фуа-гра',
      fullInfo: [
        { strong: '10', label: 'порций' },
        { label: 'мышь в подарок' },
      ],
      label: { key: 0.5, value: 'кг' },
      caption: 'Печень утки разварная с артишоками.',
      disabled: false,
    },
    {
      topInfo: 'Сказочное заморское яство',
      title: 'Нямушка',
      description: 'с рыбой',
      fullInfo: [
        { strong: '40', label: 'порций' },
        { strong: '2', label: 'мыши в подарок' },
      ],
      label: { key: 2, value: 'кг' },
      caption: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      disabled: false,
    },
    {
      topInfo: 'Сказочное заморское яство',
      title: 'Нямушка',
      description: 'с курой',
      fullInfo: [
        { strong: '100', label: 'порций' },
        { strong: '5', label: 'мышей в подарок' },
        { label: 'заказчик доволен' },
      ],
      label: { key: 5, value: 'кг' },
      caption: 'Филе из цыплят с трюфелями в бульоне.',
      disabled: true,
    },
  ];

  const foodItems = foodItemsConfig.map((item, index) => {
    return <FoodItem key={ index } props={ item } />
  });

  return (
    <div className="app" id="app">
      <AppHeader title='Ты сегодня покормил кота?' />

      <AppContent>
        { foodItems }
      </AppContent>
    </div>
  );
}

export default App;
