import React, { Component } from "react";
import Intropage from "./components/intropage";
import "./customcss/style.css";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
ReactGA.initialize('UA-175340939-1');

 
class Home extends Component {

          render() {
          ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <>

<Helmet>
            <meta charSet="utf-8" />
            <title>Bongo Music | Get Latest News & Download Latest Igbo Songs</title>
            
            <meta name="keywords" content="Download Atinga Woma, Mike Ejeagha, 
            Sewa Sewa, Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses, Empire Bongo, 
            Ajibo Machine,Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
            Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
            Eluigwe Nwa Ugorji, Chimuanya and Chinedum, Chimuanya, Obisco, 
            Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, ND Stanley Naorom, 
            Saro Wiwa, Chima Eke " />

            <meta
                name="description"
                content="Get Latest Igbo News & Download Latest Atinga Woma, Mike Ejeagha, Sewa Sewa,
                 Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses,
                  Empire Bongo, Ajibo Machine,Sunny Bobo, Holy Man,
                   Chinedu Okere, Bogar Bongo, Bongo Apostle, KC Voice, 
                   Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
                   Eluigwe Nwa Ugorji, Chimuanya and Chinedum,
                    Chimuanya, Obisco, Shama Melody, KoKo Nwa Jesus, 
                    Dr Sir Foreigner, ND Stanley Naorom, Saro Wiwa, Chima Eke."
            />
            <meta 
            name="title" 
            content="Get Latest Igbo News & Download Latest Atinga Woma, Mike Ejeagha, Sewa Sewa,
                 Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses,
                  Empire Bongo, Ajibo Machine,Sunny Bobo, Holy Man,
                   Chinedu Okere, Bogar Bongo, Bongo Apostle, KC Voice, 
                   Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
                   Eluigwe Nwa Ugorji, Chimuanya and Chinedum,
                    Chimuanya, Obisco, Shama Melody, KoKo Nwa Jesus, 
                    Dr Sir Foreigner, ND Stanley Naorom, Saro Wiwa, Chima Eke." />
             <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bongomusic.com.ng/" />


            <meta property="og:description"
                content="Get Latest Igbo News & Download Latest Atinga Woma, Mike Ejeagha, Sewa Sewa,
                 Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses,
                  Empire Bongo, Ajibo Machine,Sunny Bobo, Holy Man,
                   Chinedu Okere, Bogar Bongo, Bongo Apostle, KC Voice, 
                   Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
                   Eluigwe Nwa Ugorji, Chimuanya and Chinedum,
                    Chimuanya, Obisco, Shama Melody, KoKo Nwa Jesus, 
                    Dr Sir Foreigner, ND Stanley Naorom, Saro Wiwa, Chima Eke." />
            <meta property="og:image" content="https://bongomusic.com.ng/logo.png" />

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://bongomusic.com.ng/"/>
            <meta property="twitter:title" content="Home | Get Latest News & Download Latest Igbo Songs 2022 - BongoMusic.Com.Ng"/>
            <meta property="twitter:description"
                content="Get Latest Igbo News & Download Latest Atinga Woma, Mike Ejeagha, Sewa Sewa,
                 Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses,
                  Empire Bongo, Ajibo Machine,Sunny Bobo, Holy Man,
                   Chinedu Okere, Bogar Bongo, Bongo Apostle, KC Voice, 
                   Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
                   Eluigwe Nwa Ugorji, Chimuanya and Chinedum,
                    Chimuanya, Obisco, Shama Melody, KoKo Nwa Jesus, 
                    Dr Sir Foreigner, ND Stanley Naorom, Saro Wiwa, Chima Eke."/>
            <meta property="twitter:image" content="https://bongomusic.com.ng/logo.png"/>
            <link href="favicon.png" rel="icon"/>

        </Helmet>
  
      <Intropage />
	        
      </>
    );
  }
}

export default Home;