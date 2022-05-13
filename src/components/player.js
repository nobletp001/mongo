import React, { Component } from "react";
import "../customcss/style.css";
import "../customcss/sidebar.css";
import "../customcss/player.css";
import "../customcss/assets/cspd-player.css";
import Footerad1 from "../footerad/ad.gif";
import "../customcss/newplayer.css";
     
class PlayerFrame extends Component {

    render() {

     return (
            <>

<div id="cs_audioplayer">
<img className="d-block w-100 img-responsive" style={{borderRadius: '7px'
}} src={ Footerad1 } alt="Advert Space" /> 
                </div>
          

            </>
    );

  }
}

export default PlayerFrame;