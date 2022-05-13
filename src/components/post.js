import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <article className="post">
        <header className="post__header">
          <h1>{post.title.rendered}</h1>
        </header>
        <section
          className="post__excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      </article>
    );
  }
}

export default Post;