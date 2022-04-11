import React from 'react';
import classNames from "classnames";
import wrap_style from "./style/wrapper.module.css";
import container_style from "./style/container.module.css"
import {Aside} from "./components/aside/Aside";
import {Header} from "./components/header/Header";
import {Profile} from "./components/main/MyPosts/Profile";



function App() {
  return (
    <div className={classNames(wrap_style.wrapper, container_style.container)}>
       <Header/>
        <Aside/>
        <Profile/>
    </div>
  );
}

export default App