import React from 'react';
import {NavLink} from "react-router-dom";
import dialogItemStyle from './dialogItem.module.css'


type DialogItemProps = {
    id: string
    name: string
}
export const DialogItem: React.FC<DialogItemProps> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={dialogItemStyle.dialogItemRow}>
            <div>
                <img src="/img/post/istockphoto-1190613233-170667a.jpeg" alt="post" className={dialogItemStyle.dialogItemImg}/>
            </div>
            <div className={dialogItemStyle.dialogItem}>
                <NavLink to={path} className={i=>i.isActive?dialogItemStyle.active:dialogItemStyle.dialogItem}>{props.name}</NavLink>
            </div>
        </div>
    )
}
