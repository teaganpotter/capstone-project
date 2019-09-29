import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import InfoWindowEx from './../infoWindowEx/InfoWindowEx';
import Dropdown from 'react-bootstrap/Dropdown';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';



class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            student: {},
            filteredAgencies: undefined,
            selectedAgencyLocation: undefined,
            itemsAccepted: "",
            agencies: [],
            showInfoWindow: false,
            clickedLat: 0,
            clickedLng: 0,
            agencySelected: null,
            mapCenter: { lat: 38.6270, lng: -90.1994 },
            filteredString: "all",
        };
    }

    setSelectedAgencyInfo(agencyData) {
        this.setState({ selectedAgencyLocation: agencyData })
    }

    componentDidMount() {
        this.getAllAgencies();
        const loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));
        this.setState(
            {
                student: loggedInStudent
            }
        )
    }

    showInfoWindow(lat, lng, id) {
        const agency = this.state.agencies.find(v => {
            return v.id === id;
        });
        this.setState(
            {
                showInfoWindow: true,
                clickedLat: lat,
                clickedLng: lng,
                agencySelected: agency,
                mapCenter: { lat: lat, lng: lng }
            }
        )
    }

    getAllAgencies() {
        axios.get("http://localhost:8080/getAgencies").then(response => {
            if (response.data !== undefined) {
                this.setState({ agencies: response.data });
                this.getAgenciesByItemsAccepted(null);
                localStorage.setItem("agencies", JSON.stringify(response.data));
            }
        }).catch(error => {
        });
    }

    getAgenciesByItemsAccepted(value) {
        const mapAgencies = this.state.agencies;
        let filteredAgencies = null;
        let filteredString = value ? value : "All";
        if (value === null || value === "" || value === "all") {
            filteredAgencies = mapAgencies;
        } else {
            filteredAgencies = mapAgencies.filter(a => {
                return a.itemsAccepted.includes(value.toLowerCase());
            });
        }
        const markers = filteredAgencies.map((v, i) => {
            return <Marker
                title={v.name}
                key={v.id}
                position={{lat: v.latitude, lng: v.longitude }}
                icon={"http://maps.google.com/mapfiles/ms/icons/red-pushpin.png"}
                // onClick={() => this.setSelectedAgencyInfo(v)}
                onClick={() => this.showInfoWindow(v.latitude, v.longitude, v.id)}
            />




        });
        this.setState({
            filteredAgencies: markers,
            filteredString: filteredString
        })
    }

    onInfoClick(self) {
        localStorage.setItem("agency", JSON.stringify(self.state.agencySelected));
        self.props.history.push('/agencyDetail');
    }

    onTypeClicked(type, humanString) {
        this.getAgenciesByItemsAccepted(type);
        this.setState({
            filteredString: humanString
        })

    }

    render() {
        const displaySelectedAgencies = !this.state.selectedAgencyLocation ? "" : (
            <div>
                <p>{this.state.selectedAgencyLocation.name}</p>

            </div>

        )

        const markers = this.state.filteredAgencies;
        const infoWindow = (
            <InfoWindowEx
                visible={this.state.showInfoWindow}
                position={{ lat: this.state.clickedLat, lng: this.state.clickedLng }}
                pixelOffset={new this.props.google.maps.Size(0, -40)}
            >
                <div>
                    <div className="information" onClick={() => this.onInfoClick(this)}>
                        {(this.state.agencySelected == null) ? "" : this.state.agencySelected.name}
                    </div>
                </div>
            </InfoWindowEx>
        )

        return (
            <div className="home-margin-top-less-200px background-padding">
            <div>
            <Jumbotron fluid className="jumbotron-position">
                <Container>
                </Container>
            </Jumbotron>
        </div>
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item"><br></br>
                                    <Link className="nav-link active" to="/nonprofit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                         Nonprofits
                                    </Link>
                                </li><br></br>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                     Donate an Item
                                     </Link>
                                </li><br></br>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/newsletter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                     Newsletter
                                    </a>
                                </li><br></br> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/about-us">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                     About Us
                                     </a>
                                </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            </h6>

                        </div>
                    </nav>
                      

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 h-main"><div className="chartjs-size-monitor" style={{ position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', 'pointerEvents': 'none', visibility: 'hidden', 'zindex': '-1' }}><div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointerEvents': 'none', visibility: 'hidden', 'zindex': '-1' }}><div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: '0', top: '0' }}></div></div><div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', 'pointerEvents': 'none', visibility: 'hidden', 'zindex': '-1' }}><div style={{ position: 'absolute', width: '200%', height: '200%', left: '0', top: '0' }}></div></div></div>
                       
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 welcome-words">
                                <h1 className="welcome-statement">Hi, {this.state.student.firstName}! Here are the nonprofits in the St. Louis area:</h1>

                                {displaySelectedAgencies}
                            </div>
                            <div>
                                <div className="h-dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
                                            Search by Donation Type
                                         </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("all", "All")}>All</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("clothing", "Clothing")}>Clothing</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("vehicles", "Vehicles")}>Vehicles</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("furniture", "Furniture")}>Furniture</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("tools", "Tools")}>Tools</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("personal hygiene items", "Personal Hygiene Items")}>Personal Hygiene Items</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("canned food", "Canned Food")}>Canned Food</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("books", "Books")}>Books</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("building materials", "Building Materials")}>Building Materials</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("appliances", "Appliances")}>Appliances</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("pet supplies", "Pet Supplies")}>Pet Supplies</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.onTypeClicked("household goods", "Household Goods")}>Household Goods</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="h-filter">
                                        Filter: {this.state.filteredString}
                                    </div>
                                </div>
                            </div>




                            <br></br>
                            <br></br>

                            <div className="h-map">
                                <Map
                                    google={this.props.google}
                                    center={{ lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng }}
                                    style={mapStyles}
                                    zoom={12}
                                >
                                    {markers}
                                    {infoWindow}
                                </Map>
                            </div>
                        </main>
                    </div>


                </div>
                );
        
            }
        }
        
const mapStyles = {
                    width: '90%',
                height: '500px',
                borderRadius: '15px'
              };
            
export default GoogleApiWrapper({
                    apiKey: ('ApiKey')
            })(Home);
