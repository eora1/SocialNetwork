import {v1} from "uuid";


export let state:RootStateProps= {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hi ! how are you ?', likeCount: 12},
            {id: v1(), message: 'Its my first post', likeCount: 20},
        ],
    },
    dialogPage: {
        dialogsData: [
            {id: v1(), name: 'Daniil'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Victor'},
            {id: v1(), name: 'Valeriy'},
        ],
        messagesData: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your it-kamasutra?'},
            {id: v1(), message: 'Yo'},
        ],
    },
    sideBar:{
        friends: [
            {id: v1(), name: 'Daniil'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Sveta'},
        ],
    },
}

export type DialogsDataProps = {
    id: string
    name: string
};
export type MessagesDataProps = {
    id: string
    message: string
};
export type PostDataProps = {
    id: string
    message: string
    likeCount: number
};

export type SideBarDataProps={
    id: string
    name: string
}

export type ProfilePageProps = {
    postData: PostDataProps[]
}

export type DialogPageProps = {
    dialogsData: DialogsDataProps[]
    messagesData: MessagesDataProps[]
}

export type SideBarProps={
    friends: SideBarDataProps[]
}

export type RootStateProps = {
    profilePage: ProfilePageProps
    dialogPage: DialogPageProps
    sideBar:SideBarProps
}

export type StateType = {
    state: RootStateProps
}


