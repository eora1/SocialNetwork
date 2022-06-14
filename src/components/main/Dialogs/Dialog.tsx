import React from "react";
import dialog_style from "./dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogItemProps={
    id:string
    name:string
}
const DialogItem:React.FC<DialogItemProps> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={dialog_style.dialogs_item + ' ' + dialog_style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageProps={
    message:string
}
const Message:React.FC<MessageProps> = (props) => {
    return (
        <div className={dialog_style.messages_item}>{props.message}</div>
    )
}

export function Dialog() {
    return (
        <div>
            <div className={dialog_style.dialogs}>
                <div className={dialog_style.dialogs_list}>
                    <DialogItem name='Daniil' id='1'/>
                    <DialogItem name='Andrey' id='2'/>
                    <DialogItem name='Sveta' id='3'/>
                    <DialogItem name='Sasha' id='4'/>
                    <DialogItem name='Victor' id='5'/>
                    <DialogItem name='Valeriy' id='6'/>

                </div>
                <div className={dialog_style.messages}>
                    <Message message='Hi'/>
                    <Message message='How is your it-kamasutra?'/>
                    <Message message='Yo'/>
                </div>
            </div>
        </div>
    )
}