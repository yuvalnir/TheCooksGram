import React, { Component } from "react";

import { withRouter } from 'react-router-dom';

class Login extends Component {

    /** handleSubmit - responsible for user authentication,
    if user authenticated correctly it will change the browser address to /menu
    and to change the navBar to the main screen navBar */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/home');

        // if(userIsAuthenticated)
        this.props.setIsLogedin(true);  //should chang the screen and navBar to the main screen
        // else show username or password are incorrect error massage
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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