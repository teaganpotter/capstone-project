import React, { Component } from 'react';
import './AgencyDetail.css';


class AgencyDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            agency: null

        }
    }
    componentDidMount() {
        const agency = JSON.parse(localStorage.getItem("agency"));
        this.setState(
            {
                agency: agency
            }
        )
        console.log(agency);
    }


    render() {
        return (
            <div>
           
            <div className="ad-flex">
            <div className= "ad-box">
                
                <div><span className="ad-header">{this.state.agency? this.state.agency.name: ""}</span></div>
                <div><br></br>
                <div><span className="ad-header">Mission Statement:<br></br></span>
                {this.state.agency? this.state.agency.missionStatement: ""}</div><br></br>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                {this.state.agency? this.state.agency.address: ""}</div>
                <div className="tab">{this.state.agency? this.state.agency.city: ""},&nbsp;
                {this.state.agency? this.state.agency.state: ""}&nbsp;
                {this.state.agency? this.state.agency.zip: ""}</div> <br></br>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {this.state.agency? this.state.agency.phone: ""}</div> <br></br>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href={this.state.agency? "mailto:" + this.state.agency.email: ""}>{this.state.agency? this.state.agency.email: ""}</a></div> <br></br>
                <div><span className="ad-header">Donation Hours: <br></br></span>
                {this.state.agency? this.state.agency.donationHours: ""}</div><br></br>
                <div><a href={this.state.agency? this.state.agency.website: ""} target="_blank_">{this.state.agency? this.state.agency.website: ""}</a></div><br></br>
                <div><span className="ad-header">Will Pick up:<br></br> </span>
                {this.state.agency? (this.state.agency.doPickUp? "Yes": "No"): ""}</div><br></br>
                <div><span className="ad-header">Items Accepted: <br></br></span>
                {this.state.agency? this.state.agency.itemsAccepted: ""}</div><br></br>
                <div><span className="ad-header">Type of Organization: <br></br></span> 
                {this.state.agency? this.state.agency.typeOfOrg: ""}</div>

                    </div>

            </div>
            </div>
            </div>
        );
    }
}

export default AgencyDetail;