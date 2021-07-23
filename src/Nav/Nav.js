import React from 'react';
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <div className={s.nav}>
            <NavLink to='/main' activeClassName={s.Activeitem} className={s.item} href="">Главная</NavLink>
            <NavLink to='/skills' activeClassName={s.Activeitem} className={s.item} href="">Скиллы</NavLink>
            <NavLink to='/projects'activeClassName={s.Activeitem} className={s.item} href="">Проекты</NavLink>
            <NavLink to='/contacts' activeClassName={s.Activeitem} className={s.item} href="">Контакты</NavLink>
        </div>
    );
}

export default Nav;
