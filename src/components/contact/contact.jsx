import React from 'react'

function Contact() {
    return (
        <>
            <div>
                <div className='header-container header-contact'>
                    Get in Touch
                </div>
                <div className='contact-content'>
                    <a href="https://github.com/jamalmakavelii" >
                        github <ion-icon name="logo-github" size="small" />
                    </a>
                    <a href="https://www.linkedin.com/in/jamal-meldrick-sangalang-209743266/" >
                        Linkedin <ion-icon name="logo-linkedin" size="small" />
                    </a>
                    <a href="tel:+639619824875" >
                        (+63)9619824875 <ion-icon name="call" size="small" />
                    </a>
                    <a href="mail:sangalangjamal@gmail.com" >
                        sangalangjamal@gmail.com <ion-icon name="mail" size="small" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact