import React, {FC} from "react";
import {Post} from "./Post/Post";
import myPostStyle from './myPosts.module.css'
import {ProfilePageProps} from "../../../redux/state";

type StateType = {
    profilePage: ProfilePageProps
};

export const MyPosts: FC<StateType> = (props) => {
    let postData = props.profilePage.postData;
    let postElement = postData.map((p) => {
        return <Post id={p.id} message={p.message} likeCount={p.likeCount}/>
    });

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
                {postElement}
            </div>
        </div>
    );
};