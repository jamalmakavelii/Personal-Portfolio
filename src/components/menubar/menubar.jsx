import React from 'react'

function Menubar() {

    const content = () => {
        const element = document.querySelector(".main-content");
        const y = element.offsetTop - 50;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const skills = () => {
        const element = document.querySelector(".skill-content");
        const y = element.offsetTop - 110;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const workexp = () => {
        const element = document.querySelector(".workexp");
        const y = element.offsetTop - 60;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const contact = () => {
        const element = document.querySelector(".header-contact");
        const y = element.offsetTop - 50;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
        <>
            <div className='card-of-content'>
                <ul>
                    Table of Content
                </ul>
                <ul>
                    <li onClick={content}>Education</li>
                    <li onClick={skills}>Skills</li>
                    <li onClick={workexp}>Work Experiences</li>
                    <li onClick={contact}>Contact</li>
                </ul>
            </div >
        </>
    )
}

export default Menubar