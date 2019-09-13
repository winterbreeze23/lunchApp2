import React, { Component } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Time</th>
            <th>Restaurants</th>
            <th>(S)he says</th>
            <th>Delete</th>
            <th>Join</th>
        </tr>
      </thead>
    )
  }

const TableBody = props => {
    const rows = props.lunchData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.day}</td>
            <td>{row.date}</td>
            <td>{row.time}</td>
            <td>{row.restaurants}</td>
            <td>{row.says}</td>
            <td id="item">
            <button onClick={() => {
                props.removeLunch(index)
            }}>Delete</button>
            </td>
            <td id="item">
            <button>Join</button>
            </td>
          </tr>
        );
    });

    return <tbody>{rows}</tbody>;
  }

  class Table extends Component {
    render() {
        const { lunchData } = this.props
        const { removeLunch } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody lunchData={lunchData} removeLunch={removeLunch}/>
            </table>
        )
    }
  }

export default Table