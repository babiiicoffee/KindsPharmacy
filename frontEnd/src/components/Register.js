import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            age: 0,
            email: '',
            password: '',
            confirmPassword: '',
            error: true,
        }
    }

    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { firstname, lastname, age, email, password, confirmPassword } = this.state;
        if (firstname.length !== 0 && lastname.length !== 0 && email.length !== 0 && password !== 0) {
            if (password === confirmPassword) {
                if (age >= 18) {
                    const data = {
                        fname: firstname,
                        lname: lastname,
                        age: age,
                        email: email,
                        password: password
                    }
                    console.log("Success")
                    axios.post('http://localhost:8081/user/register', data)
                        .then(result => {
                            // alert(result.data, "result")
                            console.log(result.data)
                            this.setState({ error: false })

                        }).catch(error => {
                            alert(error, "error")
                            this.setState({ error: true })
                        })
                } else {
                    this.setState({ error: true })
                    console.log("You are not allowed to register")
                }
            } else {
                this.setState({ error: true })
                console.log("error")
            }
        } else {
            this.setState({ error: true })
            console.log("Error \n Please fill up all the fields")
        }
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Register</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    First name : <input
                        type="text"
                        id="firstname"
                        onChange={e => this.onChange(e)}
                        name="firstname"
                        autoComplete="firstname"
                    >
                    </input><br />
                    Last name : <input type="text" id="lastname" onChange={e => this.onChange(e)} ></input><br />
                    Age : <input type="number" id="age" onChange={e => this.onChange(e)}></input><br />
                    Email : <input type="text" id="email" onChange={e => this.onChange(e)}></input><br />
                    Password : <input type="password" id="password" onChange={e => this.onChange(e)}></input><br />
                    Confirm Password : <input type="password" id="confirmPassword" onChange={e => this.onChange(e)}></input><br />
                    <button onClick={this.handleSubmit}>Submit</button>
                    <Link to="/"><button>Cancel</button></Link>
                </form>
            </div>
        )
    }
}

export default Register;