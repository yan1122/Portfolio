import React from 'react';
import s from "./Contacts.module.css"
import sContainer from '../CommonStyles/Container.module.css'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sContainer.container} ${s.ContactsContainer}`}>
                <h3 className={s.title}>
                    Contacts
                </h3>
                <form className={s.form}>
                    <input className={s.item}/>
                    <input className={s.item}/>
                    <textarea className={s.item}/>
                </form>
                <button className={s.Button}> Send</button>
            </div>
        </div>
    )
}

export default Contacts