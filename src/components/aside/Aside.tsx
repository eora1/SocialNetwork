import React from "react";
import aside_style from "./aside.module.css";

export function Aside(){
    return(
        <nav className={aside_style.aside}>
            <ul>
                <li className={aside_style.active}>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Messages</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
                <li>
                    <a href="#">Music</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
}