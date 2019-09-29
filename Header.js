import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import lemon from 'C:/Users/Teagan/student-portal/src/images/lemon.png';

class Header extends Component {

    state = {
        email: '',
        password: ''

    }

    signInSubmitHandler = (event) => {
        event.preventDefault();
        const student = { email: this.state.email, password: this.state.password }
        axios.post("http://localhost:8080/login", student).then(response => {
            //storing the user's data inside the browser for future use 
            const loginStudent = response.data;
            localStorage.setItem("loggedInStudent", JSON.stringify(loginStudent));
            //navigate to home page 
            this.props.history.push("/");
        }).catch(error => {
            //display error message to the user
        });
    }

    signInChangeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [key]: value
            }
        )
    }
    signOut = () => {
        localStorage.removeItem("loggedInStudent");
        this.props.history.push("/");
    }

    render() {
        let defaultSignInSignOut = (
            <form onSubmit={this.signInSubmitHandler} className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" name="email" value={this.state.email} onChange={this.signInChangeHandler} type="text" placeholder="Email" aria-label="Email" />
                <input className="form-control mr-sm-2" name="password" value={this.state.password} onChange={this.signInChangeHandler} type="password" placeholder="Password" aria-label="Password" />
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Login</button>
            </form>
        )
        if (localStorage.getItem("loggedInStudent")) {
            defaultSignInSignOut = <button onClick={this.signOut} className="btn btn-outline-light my-2 my-sm-0" type="button">Sign Out!</button>
        }
        return (
            <header className="header-margin-bottom">
                <nav className="navbar navbar-expand-md fixed-top">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={lemon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                         <Link className="navbar-brand" to="/">MakeLemonAid </Link>
                    </Navbar.Brand>
                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            {/* {<li className="nav-item active">
                                <Link className="nav-link" to="/about-us">About Us <span className="sr-only">(current)</span></Link>
                            </li>} */}
                            {/* </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li> } */}
                        </ul>
                        {defaultSignInSignOut}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;