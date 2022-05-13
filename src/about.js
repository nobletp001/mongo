import React, { Component } from "react";
import Img1 from "./img/clients/client-1.png";
import Img2 from "./img/clients/client-2.png";
import Img3 from "./img/clients/client-3.png";
import Img4 from "./img/clients/client-4.png";
import "./customcss/style.css";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";



ReactGA.initialize('UA-175340939-1');

class About extends Component {



  render() {
ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <>
       <Helmet>
            <meta charSet="utf-8" />
            <title>About Us Bongo Music | Igbo music community and News platform with Latest Igbo News</title>
            <meta name="keywords" content="About Us, Download Atinga Woma, Mike Ejeagha, 
            Sewa Sewa, Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses, Empire Bongo, 
            Ajibo Machine,Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
            Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
            Eluigwe Nwa Ugorji, Chimuanya and Chinedum, Chimuanya, Obisco, 
            Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, ND Stanley Naorom, 
            Saro Wiwa, Chima Eke " />
            <meta
                name="description"
                content="Igbo music community and News platform with Latest Igbo News,
                 Articles, History, 
                Event, Entertainment, Sport."
            />
            <meta 
            name="title" 
            content="About Us | Igbo music community and News platform with Latest Igbo News" />
             <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bongomusic.com.ng/about" />


            <meta property="og:description"
                content="Igbo music community and News platform with Latest Igbo News, 
                Articles, History, 
                Event, Entertainment, Sport. Download MP3 Atinga Woma, 
                Mike Ejeagha, Sewa Sewa, Chijioke, Ayaka Ozubulu, 
                Amadi Ndo, Akia Moses, Empire Bongo, Ajibo Machine,
                Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
                Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, 
                Bruno, Nwa Naze Man, Eluigwe Nwa Ugorji, 
                Chimuanya and Chinedum, Chimuanya, Obisco, 
                Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, 
                ND Stanley Naorom, Saro Wiwa, Chima Eke." />
            <meta property="og:image" content="https://bongomusic.com.ng/logo.png" />

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://bongomusic.com.ng/about"/>
            <meta property="twitter:title" content="About Us Bongo Music | Igbo music
             community and News platform with Latest Igbo News"/>
            <meta property="twitter:description"
                content="Igbo music community and News platform with Latest Igbo News, 
                Articles, History, 
                Event, Entertainment, Sport. Download MP3 Atinga Woma, 
                Mike Ejeagha, Sewa Sewa, Chijioke, Ayaka Ozubulu, 
                Amadi Ndo, Akia Moses, Empire Bongo, Ajibo Machine,
                Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
                Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, 
                Bruno, Nwa Naze Man, Eluigwe Nwa Ugorji, 
                Chimuanya and Chinedum, Chimuanya, Obisco, 
                Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, 
                ND Stanley Naorom, Saro Wiwa, Chima Eke."/>
            <meta property="twitter:image" content="https://bongomusic.com.ng/logo.png"/>
            <link href="favicon.png" rel="icon" />

        </Helmet>



      <section className="aboutcss">
<div className="row ">
    <div className="col-lg-6">
              
        <div id="aboutxt" className="container"> </div>
            <div className="container">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" 
                    src="https://www.youtube.com/embed/IJBI8qd03XU?rel=0" 
                    allowfullscreen></iframe>
                </div>
            </div>
        </div>


    <div className="col-lg-6">
        <div id="aboutxt"> </div>
            <div className="container">
            <hr />
                <h1 className="aboutxt2" ><b>About Bongo Music Africa </b></h1>
            <hr />
                    <p>Bongo Music Africa is an Igbo Music Community and Online Stream Platform that deals with Igbo Bongo Artist, Igbo High-Life Music ,
                    Igbo Traditional Music and Local Igbo Tribal Band in Eastern Nigeria. </p>
                     <p>Get latest Igbo songs from our collection of Igbo artists like Mike Ejeagha, Sewa Sewa, Chijioke, 
                     Ayaka Ozubulu, Amadi Ndo, Akia Moses, Empire Bongo, Ajibo Machine,Sunny Bobo, Holy Man, Chinedu Okere, 
                     Bogar Bongo, Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, Eluigwe Nwa Ugorji, 
                     Chimuanya and Chinedum, Chimuanya, Obisco, Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, ND Stanley Naorom, 
                     Saro Wiwa, Chima Eke, Atinga Woma and many more.
                      </p>         


                    <p>We provide you with the latest, trending, old school igbo music from popular bands across Imo State, Abia State, Enugu State, Ebonyi State,
                    Delta State, Anambra State. Stream and download high quality mp3 igbo music from Igbo traditional, Igbo cultural, Igbo gospel, Igbo High Life and manymore.</p>

            </div>
    </div>

<hr />

<div className="col-lg-2 col-md-12 col-sm-12">
    </div>
           <div className="col-lg-8 col-md-12 col-sm-12"> 
               <div className="container">
               <br />
               <br />
               <br />


               <h3 className="container">              
                    <b>Get notification on all your social media handle for Latest , Trending and Justin Igbo Songs. 
                    Be the first to listen and download your favorite Igbo artists and bands from your Smart-phone,
                    Tablet, PC and Smart TV.</b>
                </h3>
                    
                </div>
            </div>


  <div className="col-lg-2 col-md-12 col-sm-12">
    </div>
</div>
 

</section>
<br />
<hr />
    <div  className="row">
        <div className="col">
        </div>
        <div className="col">
            <img  className="d-block w-20 img-responsive"   src={ Img1 } alt="Supported"  />
        </div>
        <div className="col">
            <img className="d-block w-20 img-responsive" src={ Img2 } alt="Supported" />
        </div>
        <div className="col">
            <img className="d-block w-20 img-responsive" src={ Img3 } alt="Supported" />
        </div>
        <div className="col">
            <img  className="d-block w-20 img-responsive"  src={ Img4 } alt="Supported" />
        </div>
   
    <div className="col">
    </div>
     </div>

 <hr />
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
<br />
<br />
</>
    );
  }
}
 
export default About;