/*
 * Import remote dependancies
 */
 import React from "react";
import {
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import BreakingNewsSidebar from '../components/breakingNewsSidebar';
import BusinessNewsSidebar from '../components/businessNewsSidebar';
import HistoryNewsSidebar from '../components/historyNewsSidebar';
import SportNewsSidebar from '../components/sportNewsSidebar';
import "../customcss/blog.css";
import renderHTML from "react-render-html";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
ReactGA.initialize('UA-175340939-1');

// CHANGE THIS TO YOUR WORDPRESS SITE URL.
const baseUrl = "https://api.bongomusic.com.ng";
ReactGA.pageview(window.location.pathname + window.location.search);


export default function IctTechCategory() {
  // Track state for posts, current page and number of pages
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

  // When the page number changes call the api for posts.
  useEffect(() => {
    Axios.get(baseUrl + "/wp-json/wp/v2/posts/?categories=14&per_page=9", {
      params: { page: page }
    }).then((response) => {
      // Store the number of posible pages.
      setNumberofpage(response.headers["x-wp-totalpages"]);
      // Store the posts from the response.
      setPosts(response.data);
    });
  }, [page, setPosts]);

  // Event handler: Decrease page count no lower then 1.
  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  // Event handler: Increase page count no higher then nrofpages.
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);

    return (
      <>

<Helmet>
            <meta charSet="utf-8" />
            <title>Bongo Music | Today's History about Igbo's 
            Around The World</title>

            <meta name="keywords" content="ICT Tech News, Download Atinga Woma, Mike Ejeagha, 
            Sewa Sewa, Chijioke, Ayaka Ozubulu, Amadi Ndo, Akia Moses, Empire Bongo, 
            Ajibo Machine,Sunny Bobo, Holy Man, Chinedu Okere, Bogar Bongo, 
            Bongo Apostle, KC Voice, Ikenna Boy, Kugba Nwaeze, Bruno, Nwa Naze Man, 
            Eluigwe Nwa Ugorji, Chimuanya and Chinedum, Chimuanya, Obisco, 
            Shama Melody, KoKo Nwa Jesus, Dr Sir Foreigner, ND Stanley Naorom, 
            Saro Wiwa, Chima Eke " />

            <meta
                name="description"
                content="Follow up on the latest ICT / Technology News about Igbo Inventors, Bussinessmen, Entrepreneur and the Automobile industry. We will be updating you on latest 
        News about ICT / tech of all Igbo's breaking borders at Local and international level."
            />
            <meta 
            name="title" 
            content="Bongo Music | Latest ICT / Technology News about Igbo's 
            Around The World" />
             <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bongomusic.com.ng/ict-tech" />
          


            <meta property="og:description"
                content="Bongo Music | Get Latest ICT / Technology News about Igbo's 
            Around The World, Follow up on the latest ICT / Technology News about Igbo Inventors, Bussinessmen, Entrepreneur and the Automobile industry. We will be updating you on latest 
        News about ICT / tech of all Igbo's breaking borders at Local and international level." />
            <meta property="og:image" content="https://bongomusic.com.ng/logo.png" />

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://bongomusic.com.ng/ict-tech" />
            <meta property="twitter:title" content="Bongo Music | Get Latest ICT / Technology News about Igbo's 
            Around The World"/>
            <meta property="twitter:description"
                content="Follow up on the latest ICT / Technology News about Igbo Inventors, Bussinessmen, Entrepreneur and the Automobile industry. We will be updating you on latest 
        News about ICT / tech of all Igbo's breaking borders at Local and international level."/>
            <meta property="twitter:image" content="https://bongomusic.com.ng/logo.png"/>
            <link href="favicon.png" rel="icon"/>

        </Helmet>


        <div id="advanced-features" className="bg-dark text-secondary px-4 py-5 text-center ">
        <br />
        <br />
        <nav class="navbar navbar-expand-lg navbar-light" style={{ borderRadius: '10px', backgroundColor: '#FFC107'}}>
              <button class="navbar-toggler" type="button" 
              data-toggle="collapse" 
              data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div  class="nav-item" style={{ color: '#000 ', fontWeight: 'bold'}}>View Categories</div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link"  style={{ color: '#fff'}} href="/breakingnews">Breaking News</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style={{ color: '#fff'}}  href="/business">Business</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link" style={{ color: '#fff'}} href="/events" >Events</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style={{ color: '#fff'}} href="/history">History</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style={{ color: '#fff'}} href="/sport">Sport</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style={{ color: '#000'}} href="/ict-tech">ICT / Tech</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"  style={{ color: '#fff'}} href="/wisewords">Wise Words</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"  style={{ color: '#fff'}} href="/fashion">Fashion</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"  style={{ color: '#fff'}} href="/general-election">General Election</a>
                  </li>
                </ul>
              </div>
            </nav>
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Latest ICT / Technology News</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">Follow up on the latest ICT / Technology News about Igbo Inventors, Bussinessmen, Entrepreneur and the Automobile industry. We will be updating you on latest 
        News about ICT / tech of all Igbo's breaking borders at Local and international level. </p>
      </div>
    </div>
        
  </div>
<div className="row">

  <div className="col-lg-9">

        {posts &&
          posts.length &&
          posts.map((post, index) => {
            return (
            <li className="columns-4" key={post.id}>
            <div className="card">

            <Link to={`/posts/${post.id}`}> 
           <img  className="postimg" src={post.better_featured_image.source_url}  alt="{post.title.rendered}"   />
           </Link>

           
                <div className="card-body">
                <Link to={`/posts/${post.id}`}><h5 className="card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered}}></h5></Link>
                <p className="card-text">{renderHTML(post.excerpt.rendered)}</p>
                <Link to={`/posts/${post.id}`} className="btn btn-primary blg">Read More</Link>
              </div>
        </div>  
        </li> 
            );
          })}
      <div className="col-12 text-black white">
          <div className="row">
              <div className="col">
                <button className="btn btn-outline-primary" onClick={handlePrevPage}>Newer posts</button>
              </div>
              <div className="col">
                <h6>
                  Page {page} of {nrofpages}
                </h6>
              </div>
                <div className="col">
                  <button className="btn btn-outline-warning" onClick={handleNextPage}>Older posts</button>
                </div>
          </div>
      </div>
      </div>

  <div className="col-lg-3">
  <BreakingNewsSidebar />
  <BusinessNewsSidebar />
  <HistoryNewsSidebar />
  <SportNewsSidebar />
  </div>
</div>

  <div className="bottom-space"></div>
    </>
     );
}
