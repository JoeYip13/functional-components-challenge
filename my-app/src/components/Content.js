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
      }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }
    render() {
        return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
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
                    <PostItem savedPosts={savedPosts} />
                    : <Loader />
                }
            </div>
        </div>
        )
    }
}

export default Content