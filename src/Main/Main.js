import React from 'react';
import s from "./Main.module.css"
import sContainer from '../CommonStyles/Container.module.css'


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
            <div className={s.text}>
                <span>Hi there</span>
                <h1>I am Jeffrey Aaron</h1>
                <p>Frontend developer</p>
            </div>
            <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;
