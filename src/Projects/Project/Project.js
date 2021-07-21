import React from 'react';
import s from "./Project.module.css"

export const Project = (props) => {
    return(
        <div className={s.project}>
            <div className={s.imgContainer} >
                <a className={s.link}>Enter</a>
            </div>
            <div className={s.info}>
                <div className={s.ProjectName}>{props.name}</div>
                <div className={s.ProjectInfo}>{props.info}</div>
            </div>
        </div>
    )
}