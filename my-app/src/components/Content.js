import React, { Component } from 'react';
import {savedPosts} from '../posts.json';
import css from "./css/Content.module.css";
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: [],
      }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts,
            })
        }, 2000)
    }

    handleSearchInput = (event) => {
        // const name takes the input from the form event & converts to lower case if user search in capital letters 
        const name = event.target.value.toLowerCase()
        console.log(name)
        // const filteredPost filters the post name by lower case and includes which compares the input value to the post
        const filteredPost = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name)
        })
        // set new state of post to filterPost
        this.setState({
            posts: filteredPost
        })
    }

    render() {
        return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchInput">Search:</label>
                    <input
                        type="search"
                        id="searchInput"
                        placeholder="By Author"
                        onChange={(event) => this.handleSearchInput(event)}
                    />
                    {/* shows the length array of the posts */}
                    <h4>posts found: {this.state.posts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                
                {/* Part 1 {savedPosts.map(post => {
                    return (
                        <div key={post.title} className={css.SearchItem}>
                            <p>{post.title}</p>
                            <p>{post.name}</p>
                            <img src={post.image} alt="" />
                            <p>{post.description}</p>
                        </div>
                    )
                })} */}
                
                {
                    // pass savedPost as prop
                    // <PostItem savedPosts={savedPosts} />
                    this.state.isLoaded ? 
                    // change the props passed to the PostItem to posts in the state
                    <PostItem savedPosts={this.state.posts} />
                    : <Loader />
                }
            </div>
        </div>
        )
    }
}

export default Content