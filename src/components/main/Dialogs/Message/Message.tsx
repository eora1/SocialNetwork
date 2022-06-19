import React from 'react';
import dialog_style from "../dialog.module.css";

export type MessageProps = {
    id: string
    message: string
}
export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={dialog_style.messages_item}>{props.message}</div>
    )
};

