import React, { useState, useEffect} from "react";
import styleContainer from '../common/styles/Container.module.css';
import {SectionHeading} from "../components/section-heading/SectionHeading";
import s from './ContactForm.module.css';
import {AiOutlineFileText, AiOutlineMail, AiOutlineMessage, BsMap, BsTelephone, IoPersonOutline} from "react-icons/all";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Fade } from "react-awesome-reveal";

export const ContactForm = () => {
    return (
        <div id='contacts' className={s.formBlock}>
            <div className={`${styleContainer.container} ${s.formContainer}`}>
                <SectionHeading smallHeading='get in touch' mainHeading='contact me.' />
                <div className={s.contactsContainer}>
                    <Fade>
                        <ContactAddress />
                    </Fade>
                    <Fade>
                        <InnerForm />
                    </Fade>                     
                </div>
            </div>
        </div>
    )
};

const contacts = [
    {title: 'Address', icon: BsMap, description: 'Ulan-Ude, Russia', href: ''},
    {title: 'Email', icon: AiOutlineMail, description: 'dolzhit.ts@gmail.com', href: ''},
    {title: 'Phone', icon: BsTelephone, description: '+7 908 597 1484', href: ''},
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
    const baseURL = 'https://nodejs-gmail-zillomoons.vercel.app/'
    // const baseURL = 'http://localhost:5050/'
    const { register, formState, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post(`${baseURL}sendMessage`, { data });
        setShowingAlert(true);
    }
    const [isShowingAlert, setShowingAlert] = useState(false);
    
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ name: '', contacts: '', subject: '', message: '' })
            return () => {
                setTimeout(() => {
                    setShowingAlert(false)
                }, 3000)
            }
       }
    }, [formState.isSubmitSuccessful]);

    const alertClass = `${s.popUpMessage} ${isShowingAlert ? s.alertShown : s.alertHidden} `;
    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.formRow}>
                <div className={s.formGroup}>
                    <i><IoPersonOutline/></i>
                    <input {...register("name", {required: true})} placeholder='Name' />
                    {formState.errors.name?.type === 'required' && <p className={s.errorMessage}>Name is required</p>}
                </div>
                <div className={s.formGroup}>
                    <i><AiOutlineMail/></i>
                    <input {...register("contacts", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" placeholder='Email' />
                    {formState.errors.contacts?.type === 'required' && <p className={s.errorMessage}>Email is required</p>}
                    {formState.errors.contacts?.type === 'pattern' && <p className={s.errorMessage}>Invalid email</p>}
                </div>
            </div>
            <div className={s.formGroup}>
                <i><AiOutlineFileText/></i>
                <input {...register("subject")} placeholder='Subject'/>
            </div>
            <div className={s.formGroup}>
                <i><AiOutlineMessage/></i>
                <textarea placeholder='Message'{...register('message')}/>
            </div>
            <button className={s.submitBtn} type='submit'>Send message</button>
            <div className={alertClass}>Thanks for your message. I'll be in touch as soon as possible.</div>
        </form>
    )
}