import React, { Component } from 'react';
import Markdown from "../../components/Blog/Markdown/Markdown";

class BlogPost extends Component {
  render() {
    return (
      <div>
          <Markdown/>
      </div>
    );
  }
}

export default BlogPost;