import React, { Component } from "react";

import { withRouter } from 'react-router-dom';

class SignUp extends Component {

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
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}

export default withRouter(SignUp);
