import React from 'react';
import s from "./Project.module.css"

export const Project = (props) => {
    return(
        <div className={s.skill}>
            <img className={s.img} src={props.src} />
            <div className={s.info}>
                <div className={s.ProjectName}>{props.name}</div>
                <div className={s.ProjectInfo}>{props.info}</div>
            </div>
        </div>
    )
}