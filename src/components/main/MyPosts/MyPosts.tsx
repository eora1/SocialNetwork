import React from "react";
import posts_style from "./my_posts.module.css"
import {Post} from "./Post/Post";

export function MyPosts(){
    return(
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
               <Post message ={'Hi ! how are you ?'} count={10} />
                <Post message ={'Its my first post'} count={15}/>
            </div>
        </div>
    );
}