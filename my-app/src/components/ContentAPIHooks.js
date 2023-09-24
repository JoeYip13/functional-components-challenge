import React, { useState, useEffect } from 'react';
import css from "./css/Content.module.css";
import PostItemAPI from './PostItemAPI';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secrets';

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        fetchImages();
    }, [])
    
    const fetchImages = async () => {
            const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true`);
            const fetchedPosts = response.data.hits;
            setIsLoaded(true);
            setPosts(fetchedPosts);
            setSavedPosts(fetchedPosts)
        };

    const handleSearchInput = (e) => {
        // const name takes the input from the form event & converts to lower case if user search in capital letters 
        const name = e.target.value.toLowerCase()
        console.log(name)
        // const filteredPost filters the post name by lower case and includes which compares the input value to the post
        const filteredPost = savedPosts.filter((post) => {
            // search for user or tags
            const userMatch = post.user.toLowerCase().includes(name);
            const tagsMatch = post.tags.toLowerCase().includes(name);
            return userMatch || tagsMatch;
        })
        // set new state of post to filterPost
        setPosts(filteredPost)
    }
    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchInput">Search:</label>
                    <input
                        type="search"
                        id="searchInput"
                        placeholder=""
                        onChange={
                            (e) => handleSearchInput(e)
                        }
                    />
                    {/* shows the length array of the posts */}
                    <h4>posts found: {posts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded 
                    ? <PostItemAPI savedPosts={posts} />
                    : <Loader />
                }
            </div>
        </div>
    )
}


export default ContentAPIHooks