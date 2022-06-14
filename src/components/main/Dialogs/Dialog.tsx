import React from "react";
import dialog_style from "./dialog.module.css"
import {NavLink} from "react-router-dom";


export function Dialog() {
    return (
        <div>
            <div className={dialog_style.dialogs}>
                <div className={dialog_style.dialogs_list}>
                    <div className={dialog_style.dialogs_item + ' ' + dialog_style.active}>
                        <NavLink to="/dialogs/1">Daniil</NavLink>
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        <NavLink to="/dialogs/2">Andrey</NavLink>
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        <NavLink to="/dialogs/3">Sveta</NavLink>
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        <NavLink to="/dialogs/4">Sasha</NavLink>
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        <NavLink to="/dialogs/5">Victor</NavLink>
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        <NavLink to="/dialogs/6">Valeriy</NavLink>
                    </div>
                </div>
                <div className={dialog_style.messages}>
                    <div className={dialog_style.messages_item}>Hi</div>
                    <div className={dialog_style.messages_item}>How is your it-kamasutra?</div>
                    <div className={dialog_style.messages_item}>Yo</div>
                </div>
            </div>
        </div>
    )
}