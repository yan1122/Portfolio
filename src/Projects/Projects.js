import React from 'react';
import s from "./Projects.module.css"
import sContainer from '../CommonStyles/Container.module.css'
import {Project} from "./Project/Project";
import Title from "../CommonStyles/components/title/Title";
import todolistIMG from './../assets/img/Безымянный.png'
import inst from './../assets/img/inst.png'

const todo = {
    backgroundImage: `url(${todolistIMG})`,
};

const insta = {
    backgroundImage: `url(${inst})`,
}

const Projects = () => {
    return (
        <div className={s.ProjectsBlock}>
            <div className={`${sContainer.container} ${s.ProjectsContainer}`}>
                <Title mainText='My' text='Projects' />
                <div className={s.Projects}>
                    <Project
                        style={todo}
                        name='Todolist'
                        />
                    <Project
                        name='Instagram'
                        style={insta}
                        />
                    <Project
                        name='Social-Network' />
                </div>
            </div>
        </div>
    )
}

export default Projects