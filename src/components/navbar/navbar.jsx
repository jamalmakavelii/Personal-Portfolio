import React from 'react'

function Navbar() {

    const content = () => {
        const element = document.querySelector(".main-content");
        const y = element.offsetTop - 50;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const contact = () => {
        const element = document.querySelector(".header-contact");
        const y = element.offsetTop - 50;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
        <>
            <header className='header-navbar'>
                <button className='navbar-logoName'>
                    <a href="https://github.com/jamalmakavelii">
                        JMGS
                    </a>
                </button>
                <span className='menu'>
                    <button className='navbar-about' onClick={content}>
                        About
                    </button>
                    <button className='navbar-contact' onClick={contact}>
                        Contact
                    </button>
                </span>
            </header>
        </>
    )
}

export default Navbar