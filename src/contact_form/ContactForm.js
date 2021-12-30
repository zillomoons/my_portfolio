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
                    <div className={s.contactAddress}>
                        <div className={s.singleAddress}>
                            <h6><BsMap/> Address:</h6>
                            <a href="">Moscow, Russia</a>
                        </div>
                        <div className={s.singleAddress}>
                            <h6><AiOutlineMail/> Email:</h6>
                            <a href="">dolzhit.ts@gmail.com</a>
                        </div>
                        <div className={s.singleAddress}>
                            <h6><BsTelephone/> Phone:</h6>
                            <a href="">+7 898 545 45 45</a>
                        </div>
                    </div>
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
                </div>

            </div>
        </div>
    )
}