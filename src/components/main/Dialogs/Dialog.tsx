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
    id:string
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
    ]

    let messagesData = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo'},
    ]

    return (
        <div>
            <div className={dialog_style.dialogs}>
                <div className={dialog_style.dialogs_list}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>

                </div>
                <div className={dialog_style.messages}>
                    <Message message={messagesData[0].message} id={messagesData[0].id}/>
                    <Message message={messagesData[1].message} id={messagesData[1].id}/>
                    <Message message={messagesData[2].message} id={messagesData[2].id}/>
                </div>
            </div>
        </div>
    )
}