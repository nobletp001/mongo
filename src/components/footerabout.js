import React, { Component } from "react";
import "../customcss/style.css";
import "../customcss/player.css";
import Player from "../components/player";

class Footerabout extends Component {
  render() {
    return (
     <>



<footer id="footerabout">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright" align="center">
            &copy; 2022 Copyright <strong>Bongo Music Africa</strong>. All Rights Reserved
          </div>
         
        </div>
       
      </div>
    </div>
  </footer>

      </>
      );
  }
}
 
export default Footerabout;