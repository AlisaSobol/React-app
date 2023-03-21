import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/CardList';
import { Search }  from './components/Search';
import { robots }  from './robots';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: '',
    }
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value})
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="App code bg-dark-green pa5">
        <h1 className='f1 ttu white tracked-mega mt0'>Robofriends</h1>
        <Search searchCheange={this.onSearchChange}/>
        <CardList robots={ filteredRobots } />
      </div>
    ); 
  }
}

export default App;