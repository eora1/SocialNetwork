import React from "react";
import {Post} from "./Post/Post";
import myPostStyle from './myPosts.module.css'
import {v1} from "uuid";

export function MyPosts() {
    let postData = [
        {id: v1(), message: 'Hi ! how are you ?', likeCount: 12},
        {id: v1(), message: 'Its my first post', likeCount: 20},
    ]
    let postElement = postData.map((p) => {
        return <Post id={p.id} message={p.message} likeCount={p.likeCount}/>
    })

    return (
        <div className={myPostStyle.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={myPostStyle.posts}>
                {postElement}
            </div>
        </div>
    );
}