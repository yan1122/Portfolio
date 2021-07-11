import React from 'react';
import s from "./Projects.module.css"
import sContainer from '../CommonStyles/Container.module.css'
import {Project} from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.ProjectsBlock}>
            <div className={`${sContainer.container} ${s.ProjectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.Projects}>
                    <Project
                        src='https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'
                        name='Todolist'
                        info='Todolist'/>
                    <Project
                        src='https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'
                        name='Instagram'
                        info='Instagram'/>
                    <Project
                        src='https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'
                        name='Social-Network'
                        info='IT-INCUBATOR'/>
                </div>
            </div>
        </div>
    )
}

export default Projects