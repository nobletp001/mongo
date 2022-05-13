import React from "react";
import "../customcss/blog.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import Moment from 'react-moment';





class SportNewsSidebar extends React.Component {
  
         constructor( props ) {
        super( props );
        this.state = {
            loading: false,
            posts: [],
            error: ''
        }
    }

   

     componentDidMount() {
        const wordPressSiteUrl = "https://api.bongomusic.com.ng/";
        this.setState({ loading: true }, () => {
            axios
            .get(`${wordPressSiteUrl}/wp-json/wp/v2/posts/?categories=13&per_page=5`)
                .then(res => {
                 this.setState( { loading: false, posts: res.data })
            })
        .catch( error => this.setState({loading: false, error: error.response.data.message }))
        });


    }

  render() {
        const { posts, error } = this.state;

    return (
     <>
<br />
<div className="container">
<main>
    <div id="heading">
        <h2>Sport News</h2>
    </div>
                { error && <div className="alert alert-danger">{ error }</div> }
           
       { posts.length ? (
                        <article>
      { posts.map( post =>(
          <div key={ post.id }  id="blogrow" className="row" style={{ backgroundColor: 'rgb(50,52,54)', marginBottom: '10px', margin: '5px'}}>
              <div className="col-4">
                <img  className="postimg" src={ post.better_featured_image.source_url }   style={{ width: '100px', height: '100px', marginBottom: '10px', marginTop: '15px', borderRadius: '10px' }}   alt="{post.title.rendered}"   />
              </div>
                  <div className="col-8 blogsidebarcol-8">
                      <p id="blogheadercss_sidebar">
                          <Link to={`/posts/${post.id}`} dangerouslySetInnerHTML={{ __html: post.title.rendered}}>
                          </Link>
                      </p>
                      <div className="badge badge-pill badge-warning" style={{ margin: '5px', float: 'right' }} >                          
                          <Moment fromNow>{post.date}</Moment>
                        </div>
                  </div>
                  
           </div>
    
                            ) ) }
                       
                        </article>
                    ) : '' }
</main>

</div>
      </>
      );
  }
}
 
export default SportNewsSidebar;



