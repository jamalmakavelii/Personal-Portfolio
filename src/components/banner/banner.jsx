import React from 'react'
import Typewriter from 'typewriter-effect'
import CPE from "../../assets/pictures/CPE.png"
import profilePic from "../../assets/pictures/profile_pic.jpg"

function Banner() {
    return (
        <>
            <div className='banner'>
                <div className='banner-content'>
                    <img src={CPE} alt="CPE" className='inline-block CPE w-9 -translate-y-2' />
                    <span className='banner-hello'>
                        Hello I'm
                    </span>
                    <div className='banner-name'>
                        Jamal Sangalang
                    </div>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Programmer', 'Designer', 'Gamer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <a className='resume' href="files/RESUME-SANGALANG-JAMAL-MELDRICK-G..pdf" target="_blank" rel="noopener noreferrer">
                        &lt;Download Resume /&gt;
                    </a>
                </div>
                <img src={profilePic} alt="profilepic" className='profilepic absolute w-80 left-[66vw] top-[30vh] rounded-full z-10' />
                <div className='shadow-profile'>
                    <div className='shadow-profile-item'></div>
                </div>
            </div>
        </>
    )
}

export default Banner