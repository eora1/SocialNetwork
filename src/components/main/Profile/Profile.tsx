import React from "react";
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageProps} from "../../../redux/state";

type StateType = {
    profilePage: ProfilePageProps
}

export const Profile: React.FC<StateType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}/>
        </div>
    );
}