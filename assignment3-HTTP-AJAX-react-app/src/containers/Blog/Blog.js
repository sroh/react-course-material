import React, { Component } from "react";
import Posts from "../Blog/Posts/Posts";
import { Route, NavLink, Switch } from "react-router-dom";
// import { Route, Link } from "react-router-dom";
import NewPost from "../Blog/NewPost/NewPost";
import FullPost from "../Blog/FullPost/FullPost";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName="my-active"
                  to="/"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    // pathname: this.props.match.url + '/new-post',
                    hash: "#submit",
                    search: "?search=q"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* Single loading of rouytes with switch */}
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          {/* Route parameters */}
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
