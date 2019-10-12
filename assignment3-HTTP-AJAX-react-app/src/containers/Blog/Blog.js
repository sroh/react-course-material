import React, { Component } from "react";
import Posts from "../Blog/Posts/Posts";
import { Route, Link } from "react-router-dom";
import NewPost from "../Blog/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/new-posts',
                  // pathname: this.props.match.url + '/new-posts',
                  hash: '#submit',
                  search: '?search=q'
                }}>New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
