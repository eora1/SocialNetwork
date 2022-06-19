import React from 'react';
import messageStyle from './message.module.css'

export type MessageProps = {
    id: string
    message: string
}
export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div>{props.message}</div>
    )
};

