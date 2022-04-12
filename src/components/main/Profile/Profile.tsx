import React from "react";
import {MyPosts} from "../MyPosts/MyPosts";

export function Profile(){
    return(
        <div >
            <div>
                <img src="/img/main/4232.jpeg" alt="content_img"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}