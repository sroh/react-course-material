import React, { Component } from "react";
import Posts from "../Blog/Posts/Posts";
import { Route, NavLink, Switch } from "react-router-dom";
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
                <NavLink
                  exact
                  activeClassName="my-active"
                  to="/posts/"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }} >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    // pathname: this.props.match.url + '/new-post',
                    hash: "#submit",
                    search: "?search=q"
                  }} >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* Single loading of routes with switch */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
