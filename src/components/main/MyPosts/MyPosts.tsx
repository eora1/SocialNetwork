import React from "react";
import {Post} from "./Post/Post";
import myPostStyle from './myPosts.module.css'
import {v1} from "uuid";

export function MyPosts() {
    let postData = [
        {id: v1(), message: 'Hi ! how are you ?', likeCount:12},
        {id: v1(), message: 'Its my first post', likeCount: 20},
    ]

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
                <Post message={postData[0].message} id={postData[0].id} likeCount={postData[0].likeCount}/>
                <Post message={postData[1].message} id={postData[1].id} likeCount={postData[1].likeCount}/>
            </div>
        </div>
    );
}