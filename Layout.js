import React, { Component } from 'react';
import Signup from '../signup/Signup';
import Header from './../header/Header';
import { Route, withRouter} from 'react-router-dom';
import AboutUs from './../aboutUs/AboutUs';
import ThankYou from './../thankYou/ThankYou';
import Home from './../home/Home';
import AgencyDetail from './../agencyDetail/AgencyDetail';
import Dashboard from './../home/dashboard/Dashboard';
import Nonprofit from './../nonprofit/Nonprofit';
import Newsletter from './../newsletter/Newsletter';


class Layout extends Component {
    render() {
        //variable that allows different routes based on user's session
        let routes = (
            <React.Fragment>
            <Route exact path = "/" component = {Signup} />
            <Route path = "/sign-up" component = {Signup} />
            </React.Fragment>
        );

        if(localStorage.getItem("loggedInStudent")){
            routes = (
                <React.Fragment>
                    <Route exact path = "/" component = {Home}  />
                </React.Fragment>
            )
     }

        return (
            <div className= "header-format">
                <Header {...this.props}/>
                {routes}
                <Route path = "/about-us" component = {AboutUs} />
                <Route path = "/thank-you" component = {ThankYou} />
                <Route path = '/agencyDetail' component = {AgencyDetail} />
                <Route path = '/dashboard' component = {Dashboard} />
                <Route path = '/nonprofit' component = {Nonprofit} />
                <Route path = '/newsletter' component = {Newsletter}/>
             </div>
        );
    }
}

export default withRouter(Layout);