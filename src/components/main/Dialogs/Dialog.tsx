import React from "react";
import dialog_style from "./dialog.module.css"
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogItemProps = {
    id: string
    name: string
}
const DialogItem: React.FC<DialogItemProps> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={dialog_style.dialogs_item + ' ' + dialog_style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageProps = {
    id: string
    message: string
}
const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={dialog_style.messages_item}>{props.message}</div>
    )
}

export function Dialog() {
    let dialogsData = [
        {id: v1(), name: 'Daniil'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Valeriy'},
    ];
    let dialogElement = dialogsData.map((i) => {
        return <DialogItem name={i.name} id={i.id}/>
    });

    let messagesData = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo'},
    ];
    let messageElement = messagesData.map((m) => {
        return <Message message={m.message} id={m.id}/>
    })

    return (
        <div>
            <div className={dialog_style.dialogs}>
                <div className={dialog_style.dialogs_list}>
                    {dialogElement}
                </div>
                <div className={dialog_style.messages}>
                    {messageElement}
                </div>
            </div>
        </div>
    )
}