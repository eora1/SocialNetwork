import React from "react";
import aside_style from "./aside.module.css";
import {NavLink} from "react-router-dom";

export function Aside() {
    return (
        <nav className={aside_style.aside}>
            <ul>
                <li className={aside_style.item}>
                    <NavLink to="/profile" className={i=>i.isActive ? aside_style.active : aside_style.item}>Profile</NavLink>
                </li>
                <li className={aside_style.item}>
                    <NavLink to="/dialogs" className={i=>i.isActive ? aside_style.active : aside_style.item}>Messages</NavLink>
                </li>
                <li className={aside_style.item}>
                    <NavLink to="/news" className={i=>i.isActive ? aside_style.active : aside_style.item}>News</NavLink>
                </li>
                <li className={aside_style.item}>
                    <NavLink to="/music" className={i=>i.isActive ? aside_style.active : aside_style.item}>Music</NavLink>
                </li>
                <li className={aside_style.item}>
                    <NavLink to="/settings" className={i=>i.isActive ? aside_style.active : aside_style.item}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}