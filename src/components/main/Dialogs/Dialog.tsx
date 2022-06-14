import React from "react";
import dialog_style from "./dialog.module.css"


export function Dialog() {
    return (
        <div>
            <div className={dialog_style.dialogs}>
                <div className={dialog_style.dialogs_list}>
                    <div className={dialog_style.dialogs_item + ' ' + dialog_style.active}>
                        Daniil
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        Andrey
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        Sveta
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        Sasha
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        Victor
                    </div>
                    <div className={dialog_style.dialogs_item}>
                        Valera
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