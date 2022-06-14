import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import classNames from "classnames";
import wrap_style from "./style/wrapper.module.css";
import container_style from "./style/container.module.css"
import {Aside} from "./components/aside/Aside";
import {Header} from "./components/header/Header";
import {Profile} from "./components/main/Profile/Profile";
import {Dialog} from "./components/main/Dialogs/Dialog";
import {News} from "./components/main/News/News";
import {Music} from "./components/main/Music/Music";
import {Settings} from "./components/main/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className={classNames(wrap_style.wrapper, container_style.container)}>
                <Header/>
                <Aside/>
                <div className={wrap_style.wrapper_content}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs/*" element={<Dialog/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App