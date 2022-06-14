import React from "react";
import {Post} from "./Post/Post";
import myPostStyle from './myPosts.module.css'

export function MyPosts() {
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
                <Post message='Hi ! how are you ?' likeCount={10}/>
                <Post message='Its my first post' likeCount={15}/>
            </div>
        </div>
    );
}