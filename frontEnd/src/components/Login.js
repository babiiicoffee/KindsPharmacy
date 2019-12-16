import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: true
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8081/user/login/' + this.state.email)
            .then(result => {
                console.log(result)
                if (result === 200) {
                    this.setState({ error: false })
                } else {
                    this.setState({ error: true })
                }
            }).catch(error => {
                console.log('error')
            })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <hr />
                <form onSubmit={this.handleLogin}>
                    Email : <input type="email" id="email" /> <br />
                    Password : <input type="password" id="password" /> <br />
                    <button onClick={this.handleLogin}>Login</button> <br />
                    <Link to='/register'>Don't have an account?</Link>
                </form>
            </div>
        )
    }
}
export default Login;