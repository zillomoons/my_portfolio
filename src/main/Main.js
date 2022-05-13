import React from "react";
import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../assets/me.png';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Fade } from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div id='main' className={s.mainBlock}>
            <Particles
                className={s.particles}
                init={particlesInit}
                options={{
                    fpsLimit: 60,
                    fullScreen: false,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: 'random'
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 10 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                
                <div className={s.intro}>
                    <Fade>
                        <h6>Hello, I'm</h6>
                        <h1>Dolzhit</h1>
                        
                        <h2> frontend developer</h2>
                        <p>Hello! I'm Dolzhit. Frontend developer from Moscow, Russia. I'm experienced in UI development using React / Redux /TypeScript.</p>
                        <a href="https://github.com/zillomoons/my_portfolio/raw/master/dolzhit_ts_resume.pdf" target="_blank" rel='noreferrer' download className={s.simpleBtn}>Download CV</a>

                    </Fade>
                    </div>                
                <Tilt scale={1.05}>
                    <div className={s.photo}>
                        <div className={s.imgContainer} style={{ backgroundImage: `url(${myPhoto})` }}></div>
                        <div className={s.frameBottom}></div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
};