import React from "react";
import Footer from "./components/footer";
import {
  NavLink, Route, BrowserRouter
} from "react-router-dom";
import Home from "./home";
import Singlepost from "./singlepost";
import Blogs from "./blogs";
import Promotion from "./promotion";
import About from "./about";
import Contact from "./contact";
import Copyright from "./copyright";
import DownloadArtist from "./downloadmp3";
import Thankyou from "./components/thankyou";
import "./customcss/style.css";
import "./customcss/sidebar.css";
import "./customcss/player.css";
import "./customcss/animate.css";

import Player from "./components/player";
import logo from "./img/favicon.png";
import { Router, browserHistory } from 'react-router';
import ReactGA from 'react-ga';
import SportCategory from "./category/sportCategory";
import HistoryCategory from "./category/historyCategory";
import BusinessCategory from "./category/businessCategory";
import BreakingNewsCategory from "./category/breakingNewsCategory";
import EventCategory from "./category/eventCategory";
import WisewordsCategory from "./category/wisewordsCategory";
import FashionCategory from "./category/fashionCategory";
import IctTechCategory from "./category/ictTechCategory";
import GeneralElectionCategory from "./category/generalElectionCategory";

ReactGA.initialize('UA-175340939-1');



ReactGA.pageview(window.location.pathname + window.location.search);

const Main = () => {
  return (
<>
    <BrowserRouter basename="/">
  
    <div id="wrapper">
 <header id="header">
    <div className="container">

      <div id="logo" className="pull-left">
      <div className="row">
      <div className="col-2">
          <img id="logo" src={ logo }   alt="Bongo Music"  />
        </div>
        <div className="col-10">
        <h1 id="h1home"><a href="/"><strong> Bongo Music Africa</strong></a></h1>
        </div>
        </div>
      </div>
        
      <nav id="menu-button-nav">


        <ul id="nav" className="nav-menu">
           
            <li className="btn btn-warning"><NavLink to="/">Home</NavLink></li>
            <li className="btn btn-warning"><NavLink to="/blogs">Blog</NavLink></li>
            <li className="btn btn-warning"><NavLink to="/promotion">Promo</NavLink></li>
            <li className="btn btn-warning"><NavLink to="/about">About</NavLink></li>
            <li className="btn btn-warning"><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        
      </nav>
      </div>
      
       </header>
</div>
 
     <div id="content" className="container" >
            <Route exact path="/" component={Home}/>
            <Route path="/blogs" component={Blogs}/>
            <Route path="/promotion" component={Promotion}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/downloadmp3" component={DownloadArtist}></Route>
            <Route path="/thankyou" component={Thankyou}></Route>
            <Route path="/copyright" component={Copyright}></Route>
            <Route path="/posts/:id" component={Singlepost}></Route>
            <Route path="/breakingnews" component={BreakingNewsCategory}></Route>
            <Route path="/business" component={BusinessCategory}></Route>
            <Route path="/events" component={EventCategory}></Route>
            <Route path="/history" component={HistoryCategory}></Route>
            <Route path="/sport" component={SportCategory}></Route>
            <Route path="/wisewords" component={WisewordsCategory}></Route>
            <Route path="/fashion" component={FashionCategory}></Route>
            <Route path="/ict-tech" component={IctTechCategory}></Route>
            <Route path="/general-election" component={GeneralElectionCategory}></Route>
</div>

     
   
      </BrowserRouter>
      <Player /> 
      <Footer /> 
      </>
  )
}
export default Main

