import React from "react";
import style_post from "./post.module.css"

export function Post(){
    return(
        <div>
            <img src="/img/post/istockphoto-1190613233-170667a.jpeg" alt="post" className={style_post.post_img}/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}