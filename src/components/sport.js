import React from "react";
import "../customcss/blog.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import renderHTML from "react-render-html";
import Moment from "react-moment";

class Sport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      posts: [],
      error: "",
    };
  }
  componentDidMount() {
    const wordPressSiteUrl = "https://api.bongomusic.com.ng/";
    this.setState({ loading: true }, () => {
      axios
        .get(
          `${wordPressSiteUrl}/wp-json/wp/v2/posts/?categories=13&per_page=5`
        )
        .then((res) => {
          this.setState({ loading: false, posts: res.data });
        })
        .catch((error) =>
          this.setState({ loading: false, error: error.response.data.message })
        );
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

          {error && <div className="alert alert-danger">{error}</div>}

          {posts.length ? (
            <article>
              {posts.map((post) => (
                <div
                  key={post.id}
                  id="blogrow"
                  className="row"
                  style={{
                    backgroundColor: "rgb(50,52,54)",
                    marginBottom: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div className="col-4 resize">
                    <img className="postimg"
                      src={post.better_featured_image.source_url}
                      style={{
                        width: "100px",
                        height: "100px",
                        marginTop: "15px",
                        borderRadius: "10px",
                      }}

                        alt="{post.title.rendered}"  
                    />
                  </div>
                  <div className="col-8 blogcol-8">
                    <h3 id="blogheadercss">
                      <Link to={`/posts/${post.id}`} dangerouslySetInnerHTML={{ __html: post.title.rendered}}></Link>
                    </h3>
                    <p id="blogcontentcss">
                      {renderHTML(post.excerpt.rendered)}
                    </p>

                    <div className="col">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div
                            id="datetime"
                            className="badge badge-pill badge-warning"
                          >
                            <Moment fromNow>{post.date}</Moment>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div
                            id="readmore"
                            className="btn btn-outline-primary btn-sm"
                          >
                            <Link to={`/posts/${post.id}`} style={{ color: "white" }}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </article>
          ) : (
            ""
          )}
        </main>

          <div
            className="container"
            style={{
              marginTop: "10px",
              paddingRight: "50px",
              textAlign: "right",
            }}
          >
            <button className="btn btn-outline-primary">
              <NavLink exact to="/artist">
                Explore More
              </NavLink>
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}

export default Sport;
