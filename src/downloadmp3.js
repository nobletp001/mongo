import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./customcss/style.css";
import "./customcss/sidebar.css";
import "./customcss/lib/bootstrap/css/bootstrap.min.css";
import "./customcss/lib/bootstrap/css/bootstrap.css";
import Playericon from "./img/player_img.png";
import Booyad1 from "./footerad/ad2.gif";
import Booyad2 from "./footerad/adigbo.gif";
import SEO from '@americanexpress/react-seo';
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";

ReactGA.initialize('UA-175340939-1');


class DownloadArtist extends Component {

  render() {

  ReactGA.pageview(window.location.pathname + window.location.search);




    
const url = new URL(window.location.href);
const artist = url.searchParams.get("artist");
const title = url.searchParams.get("title");
const seotitle = url.searchParams.get("seotitle");
const genre = url.searchParams.get("genre");
const description = url.searchParams.get("description");
const keywordlists = url.searchParams.get("keywordlists");
const urldownload = url.searchParams.get("urldownload");




    return (

    <>
      <SEO
      title= {seotitle} 
      description= {description}
      keywords= {{keywordlists}}
      siteUrl= {url}
      openGraph={{
        title: {seotitle},
        description: {description},
        image: {
          src: 'https://bongomusic.com.ng/logo.png',
          alt: {seotitle},
        }
      }}
      twitterCard={{
        title: {seotitle} ,
        description: {description},
        image: {
          src: 'https://bongomusic.com.ng/logo.png',
          alt: {seotitle},
        }
      }}
    />
    
    <Helmet>
            <meta charSet="utf-8" />
            <title>{seotitle} </title>
            <meta
                name="description"
                content="{description}"
            />
            <meta 
            name="title" 
            content="{seotitle}" />
             <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bongomusic.com.ng/" />
          


            <meta property="og:description"
                content="{{keywordlists}}" />
            <meta property="og:image" content="https://bongomusic.com.ng/logo.png" />

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://bongomusic.com.ng/"/>
            <meta property="twitter:title" content="{seotitle}"/>
            <meta property="twitter:description"
                content="{description}"/>
            <meta property="twitter:image" content="https://bongomusic.com.ng/logo.png"/>
            <link href="favicon.png" rel="icon"/>

        </Helmet>

             <section>
             <div className="container">
             <div  className="col-md-12">
             <img  id="ad"  className="d-block w-100 img-responsive" style={{borderRadius: '10px'}} src={Booyad1} />
             </div>
             </div>
             </section>


              <section style={{ backgroundColor: '#fff' }}>

              <div className="row">


              <div className="col-lg-3 col-md-12 col-sm-12">
                  
              </div>


              <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="container">
              <div className="row text-center">
                    <div className="col-md-12">
                    <br />
                    <br />
                    <br />

                        <h3 id="downloadh3">Thanks for droping by, below is your download link</h3>
                    </div>
                    <div className="col-md-12"  style={{marginTop: "20px"}}>
                        <div className="pricing-table">
                            <div className="panel panel-primary"  style={{border: "none"}}>
                                <div className="controle-header panel-heading panel-heading-landing">
                                    <h1 className="panel-title panel-title-landing">
                                    <div className="row">
                                    <div className="col-2">
                                     <img id="Playericon" src={Playericon} /> 
                                    </div>
                                    <div className="col-10" style={{paddingTop: "15px"}}>
                                         <b>{artist}</b>: {title}
                                    </div>

                                    </div>
                                 
                                    </h1>
                                </div>
                                
                                <div className="panel-body panel-body-landing">
                                    <table className="table">
                                        <tr>
                                            <td style={{width: "30%"}}><b>Artist Name:</b> </td>
                                            <td style={{width: "70%", textAlign: "left"}}>{artist}</td>
                                        </tr>
                                        <tr>
                                            <td style={{width: "30%"}}><b>Title:</b> </td>
                                            <td style={{width: "70%", textAlign: "left"}}>{title}</td>
                                        </tr>
                                        <tr>
                                            <td style={{width: "30%"}}><b>Description:</b></td>
                                            <td style={{width: "70%", textAlign: "left"}}> {description}</td>
                                        </tr>
                                        <tr>
                                            <td style={{width: "30%"}}><b>Keywords:</b> </td>
                                            <td style={{width: "70%", textAlign: "left"}}>{keywordlists}</td>
                                        </tr>
                                        <tr>
                                            <td style={{width: "30%"}}><b>Genre:</b> </td>
                                            <td style={{width: "70%", textAlign: "left"}}>{genre}</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="panel-footer panel-footer-landing">
                                  <a href={"https://drive.google.com/uc?export=download&id=" + urldownload}  className="btn btn-price btn-black btn-lg">
                                  <i className="fa fa-download"></i> DOWNLOAD MP3!</a>
                                  <br />
                                  
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
              </div>
              </div>


              <div className="col-lg-3 col-md-12 col-sm-12">
              </div>


              </div>
              </section>


            

             <section>
             <div className="container">
             <div className="col-md-12">
             <img  id="ad2"  className="d-block w-100 img-responsive"  style={{borderRadius: '10px'}} src={Booyad2} />
             </div>
             </div>
             </section>

             <br />
             <br />
             <br />

              
      </>
              
    );
  }
}
 
export default DownloadArtist;