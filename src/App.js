import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

// Day
// Date
// Time
// Restaurants
// (S)he says

class App extends Component {
  state = {
    lunches: [
      {
        day: 'Today',
        date: '09/07/2019',
        time: '12 - 1pm',
        restaurants: 'Sweetgreen, Chipotlet, Ochatto, Sangkee',
        says: '“Poets are not born in a country. Poets are born in childhood."',
      },
      {
        day: 'Tomorrow',
        date: '09/08/2019',
        time: '12 - 2pm',
        restaurants: 'Commons, Beijing, JustSalad',
        says: '“Fall down seven, get up eight."',
      },
      {
        day: 'Tomorrow',
        date: '09/07/2019',
        time: '12 - 2pm',
        restaurants: 'Commons, Beijing, JustSalad',
        says: '“Miles to go..."',
      },
      {
        day: 'Monday',
        date: '09/09/2019',
        time: '12 - 1pm',
        restaurants: 'Commons, Beijing, JustSalad',
        says: '“Fall down seven, get up eight."',
      },
    ]
  };

  removeLunch = index => {
    const { lunches } = this.state
  
    this.setState({
      lunches: lunches.filter((lunch, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = lunch => {
    this.setState({ lunches: [...this.state.lunches, lunch] })
  }
  
  render() {
    const { lunches } = this.state
  
    return (
      <div className="container">
        <h1>Lunch Center</h1>
        <Table lunchData={lunches} removeLunch={this.removeLunch} />
        <h3>Post New Lunch</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App