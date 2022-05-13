import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";
import "../customcss/style.css";
import Top1to5 from "../components/top1to5";
import Top6to10 from "../components/top6to10";







class Justinsection extends Component {
  
        render() {
    return (
      <>




<section id="advanced-features">
<div className="row">

            <div className="col-lg-6">
              

<Top1to5 />
</div>
<div className="col-lg-6">
              
<Top6to10 />
</div>
 
      <div className="container" style={{marginTop: '10px', paddingLeft: '30px' }} >
      <button  className="btn btn-outline-primary"  ><NavLink exact to="/artist">Explore More</NavLink></button>
      </div>
      <br />
</div>
</section>


<div className="box-holder">
      </div>

      </>

	 );
  }
}

export default Justinsection;