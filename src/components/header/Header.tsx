import React from "react";
import header_style from "./header.module.css";


export function Header(){
    return(
        <div className={header_style.header}>
            <div>
                <img src="/img/logo/3693663_400.png" alt="logo" className={header_style.header_img}/>
            </div>
        </div>
    );
}