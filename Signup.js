import React, { Component } from 'react';
import axios from 'axios';
import './signup.css';

class Signup extends Component {

    state = {
        student: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: ''
        }
    }

    signUpSubmitHandler = (event) => {
        //Asynchronous execution-- it makes the call to the backend, waits for the response, and jumps to the 
        //next line of code 
        //prevents the username and password from showing up in the URL
        event.preventDefault();
        //mapping to our backend system-- the backend is looking for a post method
        axios.post("http://localhost:8080/submitStudentDetails", this.state.student)
        .then(response => {
            //navigate to thank you page here
            this.props.history.push("/thank-you");
        }).catch(error => {
            //display an error message on the page 
        });
    }

    signUpChangeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        const tempStudent = {...this.state.student};
        tempStudent[key] = value
        this.setState(
            {
                student:tempStudent
            }
        )
    }

    render() {
        return (
            <main className="background-image">
            <div className="signuppic">
            <header>
                <body className="signup-form">
                        
                        <form className = "signup-form">
                        <h1 className="h3 mb-3 text-center">Please sign up</h1>
                        <input type="text" id="firstname" className="form-control" name="firstName" value={this.state.student.firstName} onChange={this.signUpChangeHandler} placeholder="First Name" required="required" autofocus="" /><br></br>
                        <input type="text" id="lastName" className="form-control" name="lastName" value={this.state.student.lastName} onChange={this.signUpChangeHandler} placeholder="Last Name" required="required" autofocus="" /><br></br>
                        <input type="email" id="email" className="form-control" name="email" value={this.state.student.email} onChange={this.signUpChangeHandler} placeholder="Email Address" required="required" autofocus="" /><br></br>
                        <input type="password" id="password" className="form-control" name="password" value={this.state.student.password} onChange={this.signUpChangeHandler} placeholder="Password" required="required" />
                        <div className="checkbox mb-3">
                        </div>
                        <button className="btn btn-lg btn-success btn-block" type="submit" onClick={this.signUpSubmitHandler}>Sign Up!</button>
                        <h5 className="text-center"> Already have an acount? Login using the top right corner of the page.
                        </h5>
                   </form>
                </body>
            </header>
        

            </div>
            </main>
        );
    }
}

export default Signup;