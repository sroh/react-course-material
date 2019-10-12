import React, { Component } from 'react';
import axios from "axios";
// import {Redirect} from "react-router-dom";

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    componentDidMount(){
        // check authentication if not use
        // -> this.props.history.replace('/posts');
        console.log(this.props);
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        axios.post("/posts", post)
             .then(response => {
                console.log(response);
                // redirect
                this.props.history.replace('/posts');
                // change page
                this.props.history.push('/posts');
                // use redirect component
                // this.setState({submitted: true});
             });
    }

    render () {
        
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler} >Add Post</button>
            </div>
        );
    }
}

export default NewPost;