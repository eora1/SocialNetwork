import React from "react";
import style_post from "./post.module.css"

type PostPropsType = {
    id: string
    message: string
    likeCount: number
}
export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={style_post.post_row}>
            <div>
                <img src="/img/post/istockphoto-1190613233-170667a.jpeg" alt="post" className={style_post.post_img}/>
                <div><span>like</span> {props.likeCount}</div>
            </div>
            <div>
                <div>{props.message}</div>
            </div>
        </div>
    );
}