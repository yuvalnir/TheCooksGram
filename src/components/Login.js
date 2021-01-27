import React, { Component } from "react";

import { withRouter } from 'react-router-dom';

class Login extends Component {

    /** handleSubmit - responsible for user authentication,
    if user authenticated correctly it will change the browser address to /menu
    and to change the navBar to the main screen navBar */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/home');

        const data = new FormData(e.target);
        console.log("{email: " + data.get('email') + " password: " + data.get('password') + "}");

        fetch(`http://localhost:8081/userapi/user/${data.get('email')}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            console.log(response.status); //delete later
            if(response.status === 200){
                response.json().then(jsonObj => {
                    localStorage.setItem('userEmail', jsonObj.data.email);
                    localStorage.setItem('userFirstName', jsonObj.data.firstname);
                    localStorage.setItem('userLastName', jsonObj.data.lastname);
                    console.log(jsonObj); //delete later
                });
                this.props.setIsLogedin(true);
            } else
                alert("Email or password was entered incorrectly, db error");
        });

        // if(response.status === 200) {
        // this.props.setIsLogedin(true);  // changes the screen and navBar to the main screen
        // }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" required/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}

export default withRouter(Login);