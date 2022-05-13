import React, { Component } from "react";
import SearchArtistTip from "../components/searchArtistTip";
import "../customcss/style.css";
import Playericon from "../img/player_img.png";
import Artisttrend from  "../artist/data.json";
import {
  Link
} from "react-router-dom";





class Searchdata extends Component  {




  constructor(){
    super();

    this.state={
      search:''
      
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})

    	
   
  }

  



  render(){





    //search section
    const elementStyle ={
    	backgroundColor: '#fff'
    }

    const items = Artisttrend.filter((data)=>{
      if(this.state.search === '')
          return ''
      else if(data.artist.toLowerCase().includes(this.state.search.toLowerCase()) ){
          return  data 
      }

    }).map(data=>{




   const searchDownloadData = `downloadmp3?artist=${data.artist}&title=${data.title}&genre=${data.genre}&urldownload=${data.urldownload}&seotitle=${data.seotitle}&description=${data.description}&keywordlists=${data.keywordlists}`
    
      return(
        


<>
                           
							<div id="playerbackground" style={{marginTop:  '10px'}}>
                             <div className="row" align="center">

                                <div className="col">
                                <img id="Playericon" src={ Playericon } />

                                </div>

                             <div className="col">
                            
                  			<button id="music-play"  onclick="play()" type="button" className="btn btn-outline-warning"><b>Play</b></button>

                             </div>

                             <div className="col-5 " align="center">
                                <h6 id="music-title"><b> { data.title }</b></h6>

                             </div>

                              <div  className="col player-col-sm-2" align="center">
                                  
                                  <Link  to={searchDownloadData}  target="_blank" rel=" noopener noreferrer" id="music-download" className="btn btn-outline-primary"><b> GET MP3 </b></Link> 
                              </div>
                            
                        		</div> 
              					</div>

          
</>

      
      )
    })

 

    
    return (
    <>
    
      <input id="searchbar1" type="text" placeholder="Search Your Artists " style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      <SearchArtistTip />
      </>
    )
  }
}

export default Searchdata;