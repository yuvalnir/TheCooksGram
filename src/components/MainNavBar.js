import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Main from "./Main";
import Profile from "./Profile";
import Explore from "./Explore";
import Login from "./Login";

class MainNavBar extends Component {
    render() {
        return (
            <Router>
                <div className="MainNavBar">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" to={"/sign-in"}><h2>The Cook'sGram</h2></Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/main"}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/profile"}>Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/explore"}>Explore</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="auth-wrapper">
                    <div className="">
                        <Switch>
                            <Route path="/main" component={Main} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/explore" component={Explore} />
                            <Route path="/sign-in" component={Login} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default MainNavBar;