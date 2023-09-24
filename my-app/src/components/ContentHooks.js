import React, {useState, useEffect} from 'react'
import {savedPosts} from '../posts.json';
import css from "./css/Content.module.css";
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setfetchedPosts] = useState([]);
    
    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        console.log(name);
        const filteredPost = savedPosts.filter((posts) => {
            return posts.name.toLowerCase().includes(name)
        })
        setfetchedPosts(filteredPost)
    }
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setfetchedPosts(savedPosts);
        }, 2000);
    }, [])

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
                        onChange={
                            (e) => handleChange(e)
                        }
                    />
                    {/* shows the length array of the posts */}
                    <h4>posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {
                    // pass savedPost as prop
                    // <PostItem savedPosts={savedPosts} />
                    isLoaded ? 
                    // change the props passed to the PostItem to posts in the state
                    <PostItem savedPosts={fetchedPosts} />
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentHooks