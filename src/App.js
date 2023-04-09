import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchField } from "./store/searchSlice";
import { setRobots } from "./store/robotsSlice";
import Fixed from './components/Fixed'
import ErrorBoundry from './components/ErrorBoundry';
import { CardList } from './components/CardList';
import { Search }  from './components/Search';
import './App.css';

export default function App() {
  const searchValue = useSelector(state => state.search.searchField );
  const robotsList = useSelector(state => state.robots.robots)
  const dispatch = useDispatch();

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        dispatch(setRobots(users));
      })
  }, [])

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value))
  }

  const filteredRobots = robotsList.filter(robot => {
    return robot.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div className="App code bg-dark-green pa5" style={{marginTop: '120px'}}>
      <Fixed>
        <h1 className='f1 ttu white tracked-mega'>Robofriends</h1>
        <Search searchChange={onSearchChange}/>
      </Fixed>
      <ErrorBoundry>
        <CardList robots={ filteredRobots } />
      </ErrorBoundry>
    </div>
  );
}
