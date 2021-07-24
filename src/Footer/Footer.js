import React from 'react';
import s from "./Footer.module.css"
import sContainer from '../CommonStyles/Container.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.FooterContainer}`}>
                <h2>Ян Шашков</h2>
                <h4> © 2021 все права защищены</h4>
            </div>
        </div>
    )
}

export default Footer