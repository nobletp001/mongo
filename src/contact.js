import React from "react";
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
init("user_PUcNNHYEwveGqPqO4AE4I");
ReactGA.initialize('UA-175340939-1');




export default function Contact() {
ReactGA.pageview(window.location.pathname + window.location.search);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1ua05yd', 'template_4vtv3iv', e.target, 'user_PUcNNHYEwveGqPqO4AE4I')
      .then((result) => {
          window.location.href = "https://bongomusic.com.ng/thankyou";
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <div>

<Helmet>
            <meta charSet="utf-8" />
            <title>Contact Us | Contact us today for your music promotion</title>
            
            <meta name="keywords" content="Download Atinga Woma, Mike Ejeagha, 
            Sewa Sewa, Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses, Empire Bongo, 
            Ajibo Machine,Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
            Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
            Eluigwe Nwa Ugorji, Chimuanya and Chinedum, Chimuanya, Obisco, 
            Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, ND Stanley Naorom, 
            Saro Wiwa, Chima Eke " />

            <meta
                name="description"
                content="Contact us today for your music promotion, Sponsor post, Event and suggestions.
                Get Latest Igbo News, Articles, History, 
                Event, Entertainment, Sport, Download Atinga Woma, 
                Mike Ejeagha, Sewa Sewa, Chijioke, Ayaka Ozubulu, 
                Amadi Ndo, Akia Moses, Empire Bongo, Ajibo Machine,
                Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
                Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, 
                Bruno, Nwa Naze Man, Eluigwe Nwa Ugorji, 
                Chimuanya and Chinedum, Chimuanya, Obisco, 
                Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, 
                ND Stanley Naorom, Saro Wiwa, Chima Eke."
            />
            <meta 
            name="title" 
            content="Contact Us | Contact us today for your music promotion - BongoMusic.Com.Ng" />
             <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bongomusic.com.ng/contact" />


            <meta property="og:description"
                content="Contact us today for your music promotion, Sponsor post, Event and suggestions.
                Get Latest Igbo News, Articles, History, 
                Event, Entertainment, Sport, Download Atinga Woma, 
                Mike Ejeagha, Sewa Sewa, Chijioke, Ayaka Ozubulu, 
                Amadi Ndo, Akia Moses, Empire Bongo, Ajibo Machine,
                Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
                Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, 
                Bruno, Nwa Naze Man, Eluigwe Nwa Ugorji, 
                Chimuanya and Chinedum, Chimuanya, Obisco, 
                Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, 
                ND Stanley Naorom, Saro Wiwa, Chima Eke" />
            <meta property="og:image" content="https://bongomusic.com.ng/logo.png" />

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://bongomusic.com.ng/contact"/>
            <meta property="twitter:title" content="Contact Us | Contact us today for your music promotion - BongoMusic.Com.Ng"/>
            <meta property="twitter:description"
                content="Contact us today for your music promotion, Sponsor post, Event and suggestions.
                Get Latest Igbo News, Articles, History, 
                Event, Entertainment, Sport, Download Atinga Woma, 
                Mike Ejeagha, Sewa Sewa, Chijioke, Ayaka Ozubulu, 
                Amadi Ndo, Akia Moses, Empire Bongo, Ajibo Machine,
                Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
                Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, 
                Bruno, Nwa Naze Man, Eluigwe Nwa Ugorji, 
                Chimuanya and Chinedum, Chimuanya, Obisco, 
                Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, 
                ND Stanley Naorom, Saro Wiwa, Chima Eke."/>
            <meta property="twitter:image" content="https://bongomusic.com.ng/logo.png"/>
            <link href="favicon.png" rel="icon"/>

        </Helmet>



 <section id = "advanced-features" >
        <div id="homerowsection" className = "row" >
        <div  className = "col-lg-3" >



        </div>
        <div className = "col-lg-6" >
        <section id = "intro2" >
       
        <h1 className="center">Contact Us Today</h1>
        <p className="center">We will love to hear from you, please drop a message and we will get back within 24 hours.</p>


<form  onSubmit={sendEmail}>
    
       
    <div className="form-group">
  
    <input type="text" className="form-control" name="user_name" placeholder="Full Name" required /><br />
    </div>
    
    <div className="form-group">
  
    <input type="email" className="form-control" name="user_email" placeholder="Email Address" required /><br />
    </div>
       
    <div className="form-group">
    <textarea type="textarea" class="form-control" name="message" id="exampleFormControlTextarea1" placeholder="drop your message!...." rows="3"></textarea><br />
    
    </div>
    
   
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6" style={{marginBottom: '10px'}}>
      <button  type="submit"  className="btn btn-outline-primary btn-lg btn-block" value="Send">Submit </button>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6" style={{marginBottom:  '/px'}}>     <button type="reset" className="btn btn-outline-danger btn-lg btn-block" value="Reset">Reset</button>
      </div>
    </div> 
    
    
   
</form>
        </section> 
        </div> 


        <div id="top5Sec" className="col-lg-3" >

    
        </div> 

         </div> 
        </section>
              <br />
              <br />
              <br />
              <br />
              <br />
                          

        
      </div>
   
  );
}
