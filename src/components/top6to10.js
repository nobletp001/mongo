import React, { Component } from "react";
import "../customcss/style.css";
import "../customcss/sidebar.css";
import "../customcss/player.css";
import "../customcss/animate.css";
import "../customcss/lib/bootstrap/css/bootstrap.min.css";
import "../customcss/lib/bootstrap/css/bootstrap.css";
import Playericon from "../img/player_img.png";
import data from  "../artist/justintop6to10.json";
import {
  Link
} from "react-router-dom";





const  newdata= data.map( ( data) => {
    const searchDownloadData = `downloadmp3?artist=${data.artist}&title=${data.title}&genre=${data.genre}&urldownload=${data.urldownload}&seotitle=${data.seotitle}&description=${data.description}&keywordlists=${data.keywordlists}`

                  return  (
                    <>
                    
<div id="playerbackground" key= {data.id} style={{marginTop:  '10px'}}>
                             <div className="row" align="center">

                                <div className="col">
                                <img id="Playericon" src={ Playericon } />

                                </div>

                             <div className="col ">
                            
                  <button id="music-play" type="button" className="btn btn-outline-warning"><b>Play</b></button>

                             </div>

                             <div className="col-5 " align="center">
                                <h6 id="music-title"><b> { data.artist} - { data.title }</b></h6>

                             </div>

                              <div  className="col player-col-sm-2" align="center">
                           
                                  <Link to={searchDownloadData} target="_blank" rel=" noopener noreferrer" id="music-download" className="btn btn-outline-primary"><b> MP3 </b></Link> 
                              </div>
                            
                        </div> 
                          
              </div>

            
          
          
                  </>
                  )
                }
              )





export default class Top6to10 extends Component {
  
        render() {
    return (
      <>








                
                
      
      <div id="" className="container"> {newdata} </div>
   
           







      </>

   );
  }
}














