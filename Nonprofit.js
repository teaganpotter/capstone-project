import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import "./Nonprofit.css";

class Nonprofit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            agencies: null

        }

    }

    componentDidMount() {
        const agencies = JSON.parse(localStorage.getItem("agencies"));
        this.setState(
            {
                agencies: agencies
            }
        )
        console.log(agencies);
    }

    onAgencyClicked(agency){
        console.log(this.props);
        localStorage.setItem("agency", JSON.stringify(agency));
        this.props.history.push("/agencyDetail");
    }

    buildTable() {
        if (this.state.agencies) {
            return (
                <div>
                <h1 className="title">St.Louis Charitable Organizations</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Agency Name</th>
                            <th>Type of Organization</th>
                            <th>Items Accepted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.agencies.map(v => {
                            return (
                                <tr key={v.id}>
                                    <td className= "np-clickable" onClick= {() => this.onAgencyClicked(v)}>{v.name}</td>
                                    <td>{v.typeOfOrg}</td>
                                    <td>{v.itemsAccepted}</td>



                                </tr>
                            );

                        })}



                    </tbody>




                </Table>
                </div>

            )
        } else {
            return (<h1>No agencies available.</h1>);
        }
    }

    render() {
        return (
            <div className= "np-box">
                {this.buildTable()}
               


            </div>
        );
    }
}

export default Nonprofit;