import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {ContactForm} from "./contact_form/ContactForm";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
// portfolio example
// https://preview.themeforest.net/item/david-personal-portfolio-template/full_screen_preview/35102502?_ga=2.213610068.1928732418.1640784639-1401289632.1639845123