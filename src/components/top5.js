import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import "../customcss/style.css";
import "../customcss/sidebar.css";
import "../customcss/player.css";
import "../customcss/animate.css";
import "../customcss/lib/bootstrap/css/bootstrap.min.css";
import "../customcss/lib/bootstrap/css/bootstrap.css";
import Playericon from "../img/player_img.png";
import data from  "../artist/toptrending5.json";




const newdata = data.map((item) => {
    
    const searchDownloadData = `downloadmp3?artist=${item.artist}&title=${item.title}&genre=${item.genre}&urldownload=${item.urldownload}&seotitle=${item.seotitle}&description=${item.description}&keywordlists=${item.keywordlists}`
    return (
        <>
            <div id="playerbackground" key={item.songid} style={{ marginTop: '10px' }}>
                <div className="row" align="center">
                    <div className="col">
                        <img id="Playericon" src={Playericon} />
                    </div>
                    <div className="col ">
                        <a href="javascript:void();" id="music-play" type="button" className="btn btn-outline-warning"
                        onclick="cspd_change_music('https://docs.google.com/uc?export=download&id=13MqpnU7UhNBp1qTqRxEFJQjKXc4UzNA7');"><b>Play</b></a>
                    </div>
                    <div className="col-5 " align="center">
                        <h6 id="music-title"><b> {item.title}</b></h6>
                    </div>
                    <div className="col player-col-sm-2" align="center">
                        <Link to={searchDownloadData} target="_blank" rel=" noopener noreferrer" id="music-download" className="btn btn-outline-primary"><b> MP3 </b></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
)

export default class Top5 extends Component {
    render() {
        return (
            <>
                <h2 style={{ color: '#fff', textAlign: 'center'}}>Top 5 Trending Igbo Music</h2>
                <div id="" className="container"> {newdata} </div>
                
                <br />
            </>
        );
    }
}

