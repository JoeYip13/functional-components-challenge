import React from 'react'
import css from './css/PostItem.module.css'

function PostItemAPI(props) {
    return (
        props.savedPosts.map(post => {
            // destructuring post
            const {id, user, type, webformatURL, tags} = post
            return <div className={css.SearchItem} key={id}>
                <p>Artwork type: {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} alt="" />
                <p>{tags}</p>
            </div>
        })
    
    )
}

export default PostItemAPI