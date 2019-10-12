import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

// CSS import when not using CSS Modules
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    error: false
  };

  componentDidMount() {
    console.log(this.props);

    // works with promises
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "sven"
          };
        });
        this.setState({ posts: updatedPosts, error: false });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    //   Navigate programatically
    this.props.history.push({ pathname: '/posts/' + id });

    console.log("[Posts.js] postSelectedHandler called " + id);
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Loading....</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            click={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    } else {
      posts = <p style={{ textAlign: "center" }}>Somethinhg went wrong</p>;
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
