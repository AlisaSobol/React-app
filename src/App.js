import './App.css';
import React from 'react';
import { CardList } from './components/CardList';
import { Search }  from './components/Search';
import { robots }  from './robots';

const App = () => {
  return (
    <div className="App code bg-dark-green pa5">
      <h1 className='f1 ttu white tracked-mega mt0'>Robofriends</h1>
      <Search />
      <CardList robots={ robots } />
    </div>
  ); 
}

export default App;