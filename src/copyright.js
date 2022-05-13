import React, { Component } from "react";
import "./customcss/style.css";
import { NavLink, Link } from "react-router-dom";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";


ReactGA.initialize('UA-175340939-1');

class Copyright extends Component {
  render() {
ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <>

<Helmet>
            <meta charSet="utf-8" />
            <title>Copyright | We respects the intellectual property rights of others</title>
            
            <meta name="keywords" content="Download Atinga Woma, Mike Ejeagha, 
            Sewa Sewa, Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses, Empire Bongo, 
            Ajibo Machine,Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
            Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
            Eluigwe Nwa Ugorji, Chimuanya and Chinedum, Chimuanya, Obisco, 
            Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, ND Stanley Naorom, 
            Saro Wiwa, Chima Eke " />

            <meta
                name="description"
                content="We respects the intellectual property rights of others, and requests you to do the same. 
              We does not permit copyright infringing activities on bongomusic.com.ng, and will promptly suspend copyrighted content
               (served via a publicly available web address / URL) from being able to be stream and download on these platform when kindly
                notified."
            />
            <meta 
            name="title" 
            content="Copyright | We respects the intellectual property rights of others - BongoMusic.Com.Ng" />
             <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bongomusic.com.ng/copyright" />


            <meta property="og:description"
                content="We respects the intellectual property rights of others, and requests you to do the same. 
              We does not permit copyright infringing activities on bongomusic.com.ng, and will promptly suspend copyrighted content
               (served via a publicly available web address / URL) from being able to be stream and download on these platform when kindly
                notified." />
            <meta property="og:image" content="https://bongomusic.com.ng/logo.png" />

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://bongomusic.com.ng/copyright"/>
            <meta property="twitter:title" content="Copyright | We respects the intellectual property rights of others - BongoMusic.Com.Ng"/>
            <meta property="twitter:description"
                content="We respects the intellectual property rights of others, and requests you to do the same. 
              We does not permit copyright infringing activities on bongomusic.com.ng, and will promptly suspend copyrighted content
               (served via a publicly available web address / URL) from being able to be stream and download on these platform when kindly
                notified."/>
            <meta property="twitter:image" content="https://bongomusic.com.ng/logo.png"/>
            <link href="favicon.png" rel="icon"/>

        </Helmet>


      <div id="advanced-features" className="bg-dark text-secondary px-4 py-5 text-center ">
        <div className="py-5">
          <div className="col-lg-6 mx-auto">
            <h1 id="artistComingSoon" className="center"> Copyright Notice</h1>
              <p  style={{color: 'white'}} className="fs-5 mb-4">We respects the intellectual property rights of others, and requests you to do the same. 
              We does not permit copyright infringing activities on bongomusic.com.ng, and will promptly suspend copyrighted content
               (served via a publicly available web address / URL) from being able to be stream and download on these platform when kindly
                notified.</p>

                <p style={{color: 'white'}}>If you are a content creator/owner, copyright owner or an agent there of and would like to disable 
                the possible use of bongomusic.com.ng to download your publicly available content(s), 
                please kindly send us a request via e-mail info@bongomusic.com.ng with the information stated below and we will remove 
                the content(s) in our system within 48 hours. </p>

                <p style={{color: 'white'}}>- The URL(s) of the content(s) you want us to block.</p>
                <p style={{color: 'white'}}>- A form of electronic or physical evidence showing that you have the rights to the content(s).</p>
                <p style={{color: 'white'}}>- Contact information that is reasonably sufficient to permit us to contact you, such as an address, telephone number, and a valid e-mail address.</p>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link exact to="/" type="button" className="btn btn-outline-primary btn-lg px-4 me-sm-3 fw-bold" style={{ margin: '10px'}}>Back to Home</Link>
            </div>
          </div>
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
 
export default Copyright;


