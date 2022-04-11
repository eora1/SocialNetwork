import React from "react";
import style_post from "./post.module.css"

type PostPropsType={
    message:string
}
export function Post(props:PostPropsType){
    return(
        <div>
            <img src="/img/post/istockphoto-1190613233-170667a.jpeg" alt="post" className={style_post.post_img}/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}