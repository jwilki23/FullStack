import React from 'react';
import './App.css';
import Header from '../Header';
import FoodList from '../food/FoodList';

function App() {
  return (
    <div className="App">
      <Header slogan="Joel Hilton Movie Collection" />
      <FoodList />
    </div>
  );
}

export default App;
