import React from "react";
import aside_style from "./aside.module.css";

export function Aside(){
    return(
        <nav className={aside_style.aside}>
            <ul>
                <li className={aside_style.active}>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/dialog">Messages</a>
                </li>
                <li>
                    <a href="/news">News</a>
                </li>
                <li>
                    <a href="/music">Music</a>
                </li>
                <li>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    );
}