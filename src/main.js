import React from "react";
import Footer from "./components/footer";
import {
  NavLink, Route, BrowserRouter, HashRouter, Switch
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
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./customcss/style.css";
import "./customcss/sidebar.css";
import "./customcss/player.css";
import "./customcss/animate.css";
import "./customcss/lib/bootstrap/css/bootstrap.min.css";
import "./customcss/lib/bootstrap/css/bootstrap.css";
import "./customcss/lib/animate/animate.min.css";
import "./customcss/lib/font-awesome/css/font-awesome.min.css";
import "./customcss/lib/magnific-popup/magnific-popup.css";
import Player from "./components/player";
import logo from "./img/favicon.png";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <HashRouter >
  
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
 
     <div id="content" className="container">
     <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/promotion" component={Promotion} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/downloadmp3" component={DownloadArtist} />
            <Route path="/thankyou" component={Thankyou} />
            <Route path="/copyright" component={Copyright} />
            <Route path="/posts/:id" component={Singlepost} />
            <Route path="/breakingnews" component={BreakingNewsCategory} />
            <Route path="/business" component={BusinessCategory} />
            <Route path="/events" component={EventCategory} />
            <Route path="/history" component={HistoryCategory} />
            <Route path="/sport" component={SportCategory} />
            <Route path="/wisewords" component={WisewordsCategory} />
            <Route path="/fashion" component={FashionCategory} />
            <Route path="/ict-tech" component={IctTechCategory} />
            <Route path="/general-election" component={GeneralElectionCategory} />
    </Switch>
</div>

     
   
      </HashRouter>
      <Player /> 
      <Footer /> 
      </>
  )
}
export default Main

