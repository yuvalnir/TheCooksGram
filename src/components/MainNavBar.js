import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";
import Explore from "./Explore";
import Login from "./Login";

class MainNavBar extends Component {

    /** change's the screen and navBar to login */
    logoutHandler = (e) => {
        this.props.setIsLogedin(false);
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="main-navbar">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <Link className="navbar-brand" to={"/sign-in"}><h2>The Cook'sGram</h2></Link>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/home"}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/profile"}>Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/explore"}>Explore</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={(e) => this.logoutHandler(e)} to={"/sign-in"}>Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="auth-wrapper">
                        <div className="main-container">
                            <Switch>
                                <Route path="/home" component={Home} />
                                <Route path="/profile" component={Profile} />
                                <Route path="/explore" component={Explore} />
                                <Route path="/sign-in" render={() => (<Login setIsLogedin={this.props.setIsLogedin} />)} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default MainNavBar;