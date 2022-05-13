import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./customcss/style.css";
import "./customcss/sidebar.css";
import "./customcss/lib/bootstrap/css/bootstrap.min.css";
import "./customcss/lib/bootstrap/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-175340939-1');

class Promotion extends Component {
  render() {
ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <>

<Helmet>
            <meta charSet="utf-8" />
            <title>Bongo Music Promotion | Lets Promote your song, Articles, Event, Shows or Cultural Festival - BongoMusic.Com.Ng</title>
            
            <meta name="keywords" content="Music Promotion, Download Atinga Woma, Mike Ejeagha, 
            Sewa Sewa, Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses, Empire Bongo, 
            Ajibo Machine,Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
            Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
            Eluigwe Nwa Ugorji, Chimuanya and Chinedum, Chimuanya, Obisco, 
            Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, ND Stanley Naorom, 
            Saro Wiwa, Chima Eke " />

            <meta
                name="description"
                content="With over 50,000 people using our platform monthly to get
                 the latest Igbo News and trending igbo songs, 
              Bongo Music Africa is no doubt the best place to get your Article,
               Events, Shows, Lunching and, your Songs across to millions of Igbo News and songs lovers."
            />
            <meta name="title" content="Bongo Music Promotion | Lets Promote your song, Articles, Event, Shows or Cultural Festival - BongoMusic.Com.Ng" />
             <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bongomusic.com.ng/promotion" />


            <meta property="og:description"
                content="With over 50,000 people using our platform monthly to get
                 the latest Igbo News and trending igbo songs, 
              Bongo Music Africa is no doubt the best place to get your Article,
               Events, Shows, Lunching and, your Songs across to millions of Igbo News and songs lovers." />
            <meta property="og:image" content="https://bongomusic.com.ng/logo.png" />

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://bongomusic.com.ng/promotion"/>
            <meta property="twitter:title" content="Bongo Music Promotion | Lets Promote your song, Articles, Event, Shows or Cultural Festival - BongoMusic.Com.Ng"/>
            <meta property="twitter:description"
                content="With over 50,000 people using our platform monthly to get
                 the latest Igbo News and trending igbo songs, 
              Bongo Music Africa is no doubt the best place to get your Article,
               Events, Shows, Lunching and, your Songs across to millions of Igbo News and songs lovers."/>
            <meta property="twitter:image" content="https://bongomusic.com.ng/logo.png"/>
            <link href="favicon.png" rel="icon"/>

        </Helmet>



      <div id="advanced-features" className="bg-dark text-secondary px-4 py-5 text-center ">
        <div className="py-5">
          <div className="col-lg-6 mx-auto">
            <h1 id="artistComingSoon" className="center jumbotron">Let's Promote You Today</h1>
              <p  style={{color: 'white'}} className="fs-5 mb-4">
              With over 50,000 people using our platform monthly to get the latest Igbo News and trending igbo songs, 
              Bongo Music Africa is no doubt the best place to get your Article, Events, Shows, Lunching and, your Songs across to millions of Igbo News and songs lovers.
              We have promoted thousands of songs and Article, Events and shows in the last 3 Years with millions of Downloads recorded.
              We know what it takes to get your Song everywhere, let’s work together – your Music career will never be the same </p>
            <div className="justify-content-sm-center">
            <h1 id="artistComingSoon" className="center jumbotron">Contact Us</h1>
            <h3  style={{color: 'white'}} className="fs-5 mb-12">Send us a mail – promotion@bongomusic.com.ng</h3>
            <h3  style={{color: 'white'}} className="fs-5 mb-12">Click to chat with us on Whatsapp – +234 701 284 9024</h3>
            <h3  style={{color: 'white'}} className="fs-5 mb-12">Call us – +234 701 284 9024</h3>
            <h3  style={{color: 'white'}} className="fs-5 mb-12">Contact Form : <a href="/contact">Contact Us</a></h3>

            </div>
          </div>
        </div>
      </div>  

      <div className="col-lg-12 text-lg-left text-center" style={{ backgroundColor: '#000', borderRightRadius: '10px', marginTop: '0%'}}>
            <div align="center">
                    <ul className="social-network social-circle">
                        <li><a href="https://www.facebook.com/bongomusicafrica" rel="noopener noreferrer"  className="icoFacebook" title="Facebook"><i className="fa fa-facebook" style={{ margin: '10px', fontSize: '50px'}} ></i></a></li>
                        <li><a href="https://twitter.com/Bongo_M_Africa" rel="noopener noreferrer"  className="icoTwitter" title="Twitter"><i className="fa fa-twitter" style={{ margin: '10px', fontSize: '50px'}}></i></a></li>
                        <li><a href="https://www.youtube.com/c/BongoMusicAfrica" rel="noopener noreferrer"  className="icoYoutube" title="Youtube"><i className="fa fa-youtube" style={{ margin: '10px', fontSize: '50px'}}></i></a></li>
                        <li><a href="#" className="icoWhatsapp" title="WhatsApp"><i className="fa fa-whatsapp" style={{ margin: '10px', fontSize: '50px'}}></i></a></li>
                    </ul>   
            </div>
         
        </div>
        <br />
          <br />
        <br />
          <br />
        <br />
        <br />
  </>
    );
  }
}
 
export default Promotion;


