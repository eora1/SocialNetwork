import React from 'react';
import dialog_style from "../dialog.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemProps = {
    id: string
    name: string
}
export const DialogItem: React.FC<DialogItemProps> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={dialog_style.dialogs_item + ' ' + dialog_style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
