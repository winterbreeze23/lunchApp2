import React, { Component } from 'react'
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
import TimePicker from 'react-time-picker/dist/entry.nostyle';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// var DatePicker = require("react-bootstrap-date-picker");

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
        day: '',
        date: new Date(),
        time: '',
        restaurants: '',
        says: '""',
        }

        this.state = this.initialState
    }


    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name] : value,
        });
    }


    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { day, date, time, restaurants, says } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Day</label>
                <input 
                    type="text" 
                    name="day" 
                    value={day} 
                    onChange={this.handleChange} />
                <label>Date</label>
                <input 
                    type="date" 
                    name="date" 
                    value={date} 
                    onChange={this.handleChange} />
                <label>Time</label>
                <input 
                    type="text" 
                    // pattern="^[1][1-4](?!00$)[0-5][0]?\d+$"
                    name="time" 
                    value={time} 
                    onChange={this.handleChange} />
                <label>Restaurants</label>
                <input 
                    type="text" 
                    name="restaurants" 
                    value={restaurants} 
                    onChange={this.handleChange} />
                <label>Says</label>
                <input 
                    type="text" 
                    name="says" 
                    value={says} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
                {/* <input type="button" value="Submit" onClick={this.onSubmitForm} /> */}
            </form>
        );
    }
}

export default Form;
