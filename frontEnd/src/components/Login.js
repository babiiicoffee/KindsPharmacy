import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <hr/>
                Email : <input type="email" id="email"/> <br/>
                Password : <input type="password" id="password"/> <br/>
                <button>Login</button>
            </div>
        )
    }
}
export default Login;