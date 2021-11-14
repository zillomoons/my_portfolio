import React from "react";
import s from './ContactForm.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const ContactForm = () => {
    return (
        <div className={s.formBlock}>
            <div className={`${styleContainer.container} ${s.formContainer}`}>
                <h2 className={s.title}>Contact</h2>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}