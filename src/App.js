import './App.css';
import React, { Component } from 'react';
import  Fixed  from './components/Fixed'
import { CardList } from './components/CardList';
import { Search }  from './components/Search';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({robots:users})
      }) 
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value})
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="App code bg-dark-green pa5" style={{marginTop: '120px'}}>
        <Fixed>
          <h1 className='f1 ttu white tracked-mega'>Robofriends</h1>
          <Search searchCheange={this.onSearchChange}/>
        </Fixed>
        <CardList robots={ filteredRobots } />
      </div>
    ); 
  }
}

export default App;