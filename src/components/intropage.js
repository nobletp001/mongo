import React, { Component} from "react";
import Artistoftheweek from "../components/artistoftheweek";
import Artistoftheweek2 from "../components/artistoftheweek2";
import Top1to5 from "../components/top1to5";
import Latestblog from "../components/latestblog";
import Breakingnews from "../components/breakingnews";
import Sport from "../components/sport";
import History from "../components/history";
import Business from "../components/business";
import Searchdata from "../components/searchbar";
import Searchpage from "../components/searchpagination";
import Top5 from "../components/top5";
import "../customcss/style.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
  Link,
  NavLink,
} from "react-router-dom";


class Intropage extends Component {

    render() {
    return (
      <>

<section id = "advanced-features" >
  <div id="homerowsection" className = "row" >
    <div id="bd-color" className = "col-lg-3" >

       <table id="tabledb-color" className="table">

          <tbody>
            <tr className="tr-color">   
              <td><b>A - Z Artist</b></td>
            </tr>
            <tr className="tr-color">      
              <td><b>Most Download</b></td>
            </tr>
            <tr className="tr-color">
              <td><b>Most Stream</b></td>
            </tr>
          </tbody>


          <Artistoftheweek / >
          
          <tbody>
            <tr className="tr-color">   
              <td><a href="https://twitter.com/Bongo_M_Africa" rel="noopener noreferrer"><b>Twitter</b><i className="fa fa-twitter" style={{float: 'right' , padding: '5px', fontSize: '25px', backgroundColor: 'black', borderRadius: '5px'}}></i></a></td>
            </tr>
            <tr className="tr-color">
              <td><a href="https://www.facebook.com/bongomusicafrica" rel="noopener noreferrer"><b>Facebook</b><i className="fa fa-facebook" style={{float: 'right' , padding: '5px', fontSize: '25px', backgroundColor: 'black', borderRadius: '5px'}}></i></a></td>
            </tr>
            <tr className="tr-color">
              <td><a href="https://www.youtube.com/c/BongoMusicAfrica" rel="noopener noreferrer"><b>Youtube</b><i className="fa fa-youtube" style={{float: 'right' , padding: '5px', fontSize: '25px', backgroundColor: 'black', borderRadius: '5px'}}></i></a></td>
            </tr>
          </tbody>
        </table>

        

        </div>
        <div className = "col-lg-5" >
         
        <h2 className="trendtop6">Newest Track</h2>
            <Top1to5 / >
            
            <br />
         <section>
            <div className = "intro-text center" >
              <h2 align = "center" style={{ color: '#fff'}}> Welcome to Bongo Music Africa < /h2> 
                  <p align="center" style={{ padding: '5px'}}>Igbo Music Community and Online Stream Platform that deals with Igbo Bongo Artist, Igbo High - Life, Igbo Traditional and Local Tribal Igbo Band in Eastern Nigeria. < /p>
            </div>
         </section>

        <Artistoftheweek2 / >
    
        <Latestblog />
          </div> 
        <div id="top5Sec" className="col-lg-4" >
        <div className="container trendtop5">
          <Searchdata  />
        </div> 
          <Searchpage  />
          <Top5 / >
  
         <hr />
             <div className="container">
              <h3 className="center"><b> Follow the conversation with our massive followers</b></h3>
               <hr />
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '30%', color: 'black'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>Twitter: 5 Subscribers</b></div>
                </div>
                <hr />
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '60%', color: 'black'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>Youtube: 2,800 Subscribers</b></div>
                </div>
                <hr />
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '40%', color: 'black'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>Facebook: 700 Subscribers</b></div>
                </div>
                <hr />
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '40%', color: 'black'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>Instagram: 5 Subscribers</b></div>
                </div>
            </div>
            <Breakingnews />
            <Business />
            <Sport />
            <History />
        </div> 

         </div> 
 
        </section>
        
        <div className="bottom-space"></div>
</>
   );
  }
}


export default Intropage;