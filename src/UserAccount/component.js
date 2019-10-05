import React, { Component } from 'react'
import LunchCenter from '../LunchCenter/component'

class UserAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: false,
            userInfo: [
                {
                    id: 'firstName',
                    name: 'First Name',
                    value: ''
                },
                {
                    id: 'lastName',
                    name: 'Last Name',
                    value: ''
                },
                {
                    id: 'email',
                    name: 'Email',
                    value: ''
                },
                {
                    id: 'password',
                    name: 'Password',
                    value: ''
                },
                {
                    id: 'gender',
                    name: 'Gender',
                    value: true //true for female
                },
                {
                    id: 'campus',
                    name: 'School Campus',
                    value: ''
                },
                {
                    id: 'affiliation',
                    name: 'Affiliation',
                    value: true //true for student
                },
                {
                    id: 'phoneNumber',
                    name: 'Phone Number',
                    value: Number
                }
            ]
        }
        
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(i, e, name) {
        const arr = this.state.userInfo
        arr[i] = {
            'id': e.id,
            'name': name,
            'value': e.value
        }
        this.setState({
            userInfo: arr
        })
    }

    onSubmit(e) {
        e.preventDefault();

        //would make the API call here with the entered email and password and check if the user exists
        //give them an alert if its the wrong password or username and let them try 3 times
        //only set this to empty string if its the correct username and password
        this.onChange(2, {id: 'email', value: ''}, 'Email');
        this.onChange(3, {id: 'password', value: ''}, 'Password');
    }

    onClick() {
        this.setState({ newUser: !this.state.newUser })
    }

  render() {
    const { newUser, userInfo } = this.state
    console.log("looks e", userInfo[0])

    return (
        <div className="login-component">
            { !newUser ?
            <form className="login-container">
                <input type="email" id="email" className='email field' placeholder='' value={userInfo[2].value}
                  onChange={(e) => {this.onChange(2, e.target, 'Email')}} />
                <input type="password" id="password" className='password field' value={userInfo[3].value}
                  onChange={(e) => {this.onChange(3, e.target, 'Password')}} />
                <input type="submit" className='submit button' value="Login" onClick={this.onSubmit} />
                <input type="button" className='signup button' value="Sign up" onClick={this.onClick} />
            </form>
            : <div className='signup-component'>
                    <div className='userinfo-fields'> {
                        userInfo.map(({id, name, value}, i) => {
                            return <div className={id}>
                                <label>{name}</label>
                                {
                                    typeof value != 'boolean' ?
                                    <input type='text' id={id} key={i} placeholder=' '
                                      value={value} onChange={(e) => {this.onChange(i, e.target, name)}} />
                                      : <div />
                                //     : id === 'gender' ?
                                //     <div>
                                //         <label>Male</label>
                                //         <input type='radio' checked={true}
                                //           onChange={this.onChange(4, {id: 'gender', value: false}, 'Gender')}/>
                                //         <label>Female</label> //add non-binary
                                //         <input type='radio' checked={false}
                                //           onChange={this.onChange(4, {id: 'gender', value: true}, 'Gender')}/>
                                //     </div>
                                //     : <div>
                                //     <label>Student</label>
                                //     <input type='radio' checked={true}
                                //       onChange={this.onChange(4, {id: 'gender', value: true}, 'Gender')}/>
                                //     <label>Faculty</label>
                                //     <input type='radio' checked={false}
                                //       onChange={this.onChange(4, {id: 'gender', value: false}, 'Gender')}/>
                                // </div>
                                }
                            </div>
                        })
                    }</div>
                    <input type="button" value="Sign up" onClick={this.onClick} />
            </div>}
            {/* <LunchCenter /> */}
            </div>
    )
  }
}

// Things to change (Sept 28):
// need to figure out placeholder thing for inputs 
// need to check if eslint is actually working
// make the gender and affiliation things toggle buttons



// main component file, and then reducers are for the api (this will be in the outer file)
// and then we need actions, which will also be in the outer file
// selectors are necessary to use the action call to get the data which we get from the api
// container should just be to do mapStateToProps and mapDispatchToProps (using the selector)
// then theres the component and the style.scss file

// do we want to have different endpoints for the url (for login, signup, etc)



export default UserAccount