import React from 'react';
import s from "./Project.module.css"

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a className={s.link}>Enter</a>
            </div>
            <div className={s.info}>
                <div className={s.ProjectName}><h5>{props.name}</h5></div>
                <div className={s.ProjectInfo}>
                    <p>{props.info}</p>
                </div>
            </div>
        </div>
    )
}