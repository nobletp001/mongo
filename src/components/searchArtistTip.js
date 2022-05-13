import React, { Component } from "react";
import "../customcss/style.css";
import Button from "react-bootstrap/Badge";
import {
   NavLink
} from "react-router-dom";


class Searchdata extends Component  {



  render(){

 
      return(


<>
         <h7 id="topsearchtips" className="col-md-12 center"><b>Top Search Artist</b></h7>                    
	<div id="topsearchtips2"className="row">
 

  <ul id="topsearchtips3" className="col-md-12 center">
        <Button id="searchbarbutton" variant="primary">
      <NavLink to="#"><h7>Atinga</h7></NavLink>
        </Button>
     <Button id="searchbarbutton" variant="primary">
      <NavLink to="#"><h7>Obisco</h7></NavLink>  
        </Button>
     <Button id="searchbarbutton" variant="primary">
      <NavLink to="#"><h7>Bruno</h7></NavLink>
        </Button>
     <Button id="searchbarbutton" variant="primary">
      <NavLink to="#"><h7>Chinedu</h7></NavLink>   
        </Button>
      
       
  </ul>
</div>       
</>

      
    )
  }
}

export default Searchdata;