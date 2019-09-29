import React, { Component } from 'react';
import volunteer from 'C:/Users/Teagan/student-portal/src/images/volunteer.jpg';
import './AboutUs.css';





class AboutUs extends Component {
  render() {
    return (
      <div className="container">
      
       {/* <div className="w3-panel">
      //   <i className="w3-xlarge fa fa-bars"></i>
      // </div> */}
   
         {/* <div className="w3-half w3-container">
      //   {/* <h1 className="w3-xxlarge w3-text-grey">Hello, we are</h1>
      //     <h1 className="w3-jumbo">MakeLemonAid</h1> */}
         {/* </div>  */}
        <div className="w3-half w3-container w3-xlarge w3-text-grey">
          <p className=""> When life hands you lemons, you make lemonade-- or LemonAid-- of course! &nbsp;
          We are a community-based team centered in our hometown of St. Louis, Missouri. We're dedicated to
          our mission of giving back to our community in the form of in-kind donations. So go ahead, take 
          a look around and find your favorite charitable organization! 
         </p>
        </div>
      
      
      
        
        <div className="w3-half w3-container">
          <img src={volunteer} style={{width:'100%'}} alt="dog"/>
        
        </div>   
        {/* <div className="w3-half w3-container-1">
          <img src={arch} style={{width:'50%', height: '50%'}} alt="dog"/>
        </div>     */}
      </div>
      
    );
  }
}

export default AboutUs;

