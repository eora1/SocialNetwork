import React from "react";
import {Post} from "./Post/Post";

export function MyPosts(){
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div>
               <Post message ={'Hi ! how are you ?'} count={10} />
                <Post message ={'Its my first post'} count={15}/>
            </div>
        </div>
    );
}