import React from "react";
import "./customcss/blog.css";
import axios from 'axios';
import renderHTML from 'react-render-html';
import Moment from 'react-moment';
import { NavLink } from "react-router-dom";
import BreakingNewsSidebar from './components/breakingNewsSidebar';
import BusinessNewsSidebar from './components/businessNewsSidebar';
import SportNewsSidebar from './components/sportNewsSidebar';
import HistoryNewsSidebar from './components/historyNewsSidebar';
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
ReactGA.initialize('UA-175340939-1');



class Singlepost extends React.Component {
    

     constructor( props ) {
        super( props );
        this.state = {
            loading: false,
            post: {},
            error: ''
        }
    }
     componentDidMount() {
  

        const wordPressSiteUrl = "https://api.bongomusic.com.ng/";
        console.warn(this.props);
        this.setState({ loading: true }, () => {
            axios
            .get(`${wordPressSiteUrl}/wp-json/wp/v2${this.props.location.pathname}`)
                .then(res => {
                 this.setState( { loading: false, post: res.data })
  
            })
        .catch( error => this.setState({loading: false, error: error.response.data.message }))
        });


    }

    componentDidUpdate(prevProps) {
          // Typical usage (don't forget to compare props):
          if (this.props.location.pathname !== prevProps.location.pathname) {
            //this.fetchData(this.props.location.pathname);
            window.location.reload();
                  window.scrollTo(0, 0)


          }
        }


  
  render() {
ReactGA.pageview(window.location.pathname + window.location.search);

    const { post, error } = this.state;
console.warn(post);
    return (
    <>

    {Object.keys(post).length ? (


        <Helmet>

            
            <title>{post.title.rendered}</title>

            <meta name="description" content="{ post.excerpt.rendered }" />
            <meta name="title" content="{ post.title.rendered }" />
            <meta property="og:title" content="{ post.title.rendered }" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="{ post.yoast_head_json.og_url }" />


            <meta property="og:description" content="{ post.excerpt.rendered }" />
            <meta property="og:image" content="{ post.better_featured_image.source_url }" />

            <meta property="twitter:card" content="{ post.yoast_head_json.twitter_card }"/>
            <meta property="twitter:url" content="{ post.yoast_head_json.og_url } " />
            <meta property="twitter:title" content="{ post.title.rendered }" />
            <meta property="twitter:description" content="{ post.excerpt.rendered }"/>
            <meta property="twitter:image" content="{ post.yoast_head_json.og_url }" />
            <link href="favicon.png" rel="icon"/>
            <meta property="fb:app_id" content="598182054504461"/>




       </Helmet>

      ) : ""}
    
            <main>
                <div id="advanced-features" className="bg-dark text-secondary px-4 py-5 text-center " style={{ backgroundColor: '#323436' }}></div>
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
                    <a class="nav-link" style={{ color: '#fff'}} href="/ict-tech">ICT / Tech</a>
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
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">

                            <div className="container">

                                { error && <div className="alert alert-danger">{ error }</div> }
           
                                { Object.keys( post ).length ? (

                                    <article>
                                        <div key={ post.id }  id="blogrow" className="row" style={{ backgroundColor: 'rgb(50,52,54)', marginBottom: '10px', marginTop: '20px' }}>
                                		    <div className="col-lg-12 col-md-12 col-sm-12">
                                    		    <div className="row">
    		                                        <div className="col-lg-6 col-md-12 col-sm-12"  style={{ marginBottom: '10px', marginTop: '20px' }}>
    		                                             <div className="col">
    		                                            	<img className="img-responsive" id="singlepostcss" src={ post.better_featured_image.source_url }   alt="{post.title.rendered}"  />
    		                                             </div>   
    		                                        </div>
		                                            <div className="col">
			     <h3 id="singlebloghead" style={{ marginTop: '35px', color: '#fff' }}
			                                             dangerouslySetInnerHTML={{ __html: post.title.rendered}}>
			                                            </h3>
			                                            <hr />
			                                            <h3 id="singleblogheadercss">Published <span class="badge badge-pill badge-warning"><Moment fromNow>{ post.date }</Moment></span></h3>
			                                            <h3 id="singleblogheadercss">Categories <span class="badge badge-pill badge-warning">{ post.x_categories }</span></h3>
			                                            <h3 id="singleblogheadercss">Author <span class="badge badge-pill badge-warning">{ post.x_author }</span></h3>
			                                            <h3 id="singleblogheadercss">Date <span class="badge badge-pill badge-warning">{ post.x_date }</span></h3>
                                                    </div>
                                    		    </div>
                                            
                                             	<div className="col-lg-12 col-md-12 col-sm-12 jumbotron" style={{ marginTop: '10px' , padding: '10px' }}>
    	                                            <p  id="innerblogcontentcss" className="">
    	                                                        { renderHTML( post.content.rendered )  }
    	                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ) : '' }
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 innerblogsidebar">
                            <BreakingNewsSidebar />
                            <BusinessNewsSidebar />
                            <SportNewsSidebar />
                            <HistoryNewsSidebar />
                        </div>
                    </div>
                </main>

        <div className="blogspace"></div>
    </>
      )
  }
}
 
export default Singlepost;

