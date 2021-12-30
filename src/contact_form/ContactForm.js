import React from "react";
import styleContainer from '../common/styles/Container.module.css';
import {SectionHeading} from "../components/section-heading/SectionHeading";
import s from './ContactForm.module.css';
import {AiOutlineFileText, AiOutlineMail, AiOutlineMessage, BsMap, BsTelephone, IoPersonOutline} from "react-icons/all";

export const ContactForm = () => {
    return (
        <div id='contacts' className={s.formBlock}>
            <div className={`${styleContainer.container} ${s.formContainer}`}>
                <SectionHeading smallHeading='get in touch' mainHeading='contact me.'/>
                <div className={s.contactsContainer}>
                    <ContactAddress />
                    <InnerForm />
                </div>
            </div>
        </div>
    )
}

const contacts = [
    {title: 'Address', icon: BsMap, description: 'Moscow, Russia', href: ''},
    {title: 'Email', icon: AiOutlineMail, description: 'dolzhit.ts@gmail.com', href: ''},
    {title: 'Phone', icon: BsTelephone, description: '+7 898 545 45 45', href: ''},
]

const ContactAddress = () =>{
    return (
        <div className={s.contactAddress}>
            {contacts.map(c => <div key={c.title} className={s.singleAddress}>
                <h6>
                    <i>{React.createElement(c.icon, null, null)}</i>
                    {c.title}
                </h6>
                <a href={c.href}>{c.description}</a>
            </div>)}
        </div>
    )
}
const InnerForm = () => {
    return (
        <form className={s.form}>
            <div className={s.formRow}>
                <div className={s.formGroup}>
                    <i><IoPersonOutline/></i>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className={s.formGroup}>
                    <i><AiOutlineMail/></i>
                    <input type="email" placeholder='Email'/>
                </div>
            </div>
            <div className={s.formGroup}>
                <i><AiOutlineFileText/></i>
                <input type="text" placeholder='Subject'/>
            </div>
            <div className={s.formGroup}>
                <i><AiOutlineMessage/></i>
                <textarea placeholder='Message'/>
            </div>
            <button className={s.submitBtn} type='submit'>Send message</button>
        </form>
    )
}