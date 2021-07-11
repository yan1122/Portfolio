import React from 'react';
import s from "./Skills.module.css"
import sContainer from '../CommonStyles/Container.module.css'
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum dolor sit amet interdum. Maecenas maximus libero libero '} />
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum dolor sit amet interdum. Maecenas maximus libero libero'}/>
                    <Skill title={'JS/REACT'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum dolor sit amet interdum. Maecenas maximus libero libero '}/>
                    <Skill title={'Git'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra dictum dolor sit amet interdum. Maecenas maximus libero libero'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
