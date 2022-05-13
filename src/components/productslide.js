import React, { Component } from "react";
import "../customcss/style.css";
import Carousel from 'react-bootstrap/Carousel';
import Artistimg1 from "../img/ad_banner2.gif";

class Productslide extends Component {
  
        render() {
    return (
      <>
      
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img-responsive center"
      id="Artistimg" 
      src={ Artistimg1 }
      alt="First slide"
    />
    
  </Carousel.Item>


</Carousel>



    </>

        );
  }
}

export default Productslide;



