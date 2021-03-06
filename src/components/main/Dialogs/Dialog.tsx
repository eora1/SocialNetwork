import React from "react";
import dialog_style from "./dialog.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageProps} from "../../../redux/state";


type StateType = {
    dialogPage: DialogPageProps
}

export const Dialog: React.FC<StateType> = (props: StateType) => {
    let dialogsData = props.dialogPage.dialogsData;
    let dialogElement = dialogsData.map((d) => {
        return <DialogItem id={d.id} name={d.name}/>
    });

    let messagesData = props.dialogPage.messagesData;
    let messageElement = messagesData.map((m) => {
        return <Message id={m.id} message={m.message}/>
    });

    return (
        <div className={dialog_style.dialogs}>
            <div className={dialog_style.dialogs_list}>
                {dialogElement}
            </div>
            <div className={dialog_style.dialogs_messages}>
                {messageElement}
            </div>
        </div>
    );
};