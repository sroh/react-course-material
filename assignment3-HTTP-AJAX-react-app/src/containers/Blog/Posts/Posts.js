import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import { Link } from "react-router-dom";
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
    //   this.props.history.push({pathname: "/" + id});

    console.log("[Posts.js] postSelectedHandler called " + id);
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Loading....</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={"/" + post.id} key={post.id}>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              click={() => this.postSelectedHandler(post.id)}
            />
        </Link>
        );
      });
    } else {
      posts = <p style={{ textAlign: "center" }}>Somethinhg went wrong</p>;
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
