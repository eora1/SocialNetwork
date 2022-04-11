import React from "react";
import main_style from "./profile.module.css";
import {MyPosts} from "./MyPosts";

export function Profile(){
    return(
        <div className={main_style.main}>
            <div>
                <img src="/img/main/4232.jpeg" alt="content_img" className={main_style.main_img}/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}