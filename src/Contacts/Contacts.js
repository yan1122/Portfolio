import React from 'react';
import s from "./Contacts.module.css"
import sContainer from '../CommonStyles/Container.module.css'
import Title from "../CommonStyles/components/title/Title";

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sContainer.container} ${s.ContactsContainer}`}>
                <Title text='Contacts' />
                <form className={s.form}>
                    <input className={s.item}/>
                    <input className={s.item}/>
                    <textarea className={s.item}/>
                </form>
                <button type='submit' className={s.Button}> Send</button>
            </div>
        </div>
    )
}

export default Contacts