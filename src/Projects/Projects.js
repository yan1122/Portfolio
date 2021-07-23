import React from 'react';
import s from "./Projects.module.css"
import sContainer from '../CommonStyles/Container.module.css'
import {Project} from "./Project/Project";
import Title from "../CommonStyles/components/title/Title";

const Projects = () => {
    return (
        <div className={s.ProjectsBlock}>
            <div className={`${sContainer.container} ${s.ProjectsContainer}`}>
                <Title mainText='My' text='Projects' />
                <div className={s.Projects}>
                    <Project
                        src='https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'
                        name='Todolist'
                        info='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'/>
                    <Project
                        src='https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'
                        name='Instagram'
                        info='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'/>
                    <Project
                        src='https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'
                        name='Social-Network'
                        info='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.'/>
                </div>
            </div>
        </div>
    )
}

export default Projects