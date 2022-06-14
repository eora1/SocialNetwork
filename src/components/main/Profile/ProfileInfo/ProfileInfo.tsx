import React from 'react';
import profileStyle from './profileInfo.module.css'
import {MyPosts} from "../../MyPosts/MyPosts";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="/img/main/4232.jpeg" alt="content_img"/>
            </div>
            <div className={profileStyle.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

