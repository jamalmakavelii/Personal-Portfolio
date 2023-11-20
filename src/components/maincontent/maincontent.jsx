import React from 'react'

function Maincontent() {
    return (
        <>
            <div className='main-content'>
                <div className='education-content'>
                    <div className='header-container'>
                        Education
                    </div>
                    <ul className='list-education'>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="bulb" />
                            </span>
                            <h3 className='header-edu'>
                                Holy Angel University
                            </h3>
                            <div className='sub-education'>Bachelor of Science in Computer Engineering</div>
                            <div className='sub'>Graduated 2024</div>
                        </li>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="bulb" />
                            </span>
                            <h3 className='header-edu'>
                                Saint Nathanael Academy Inc.
                            </h3>
                            <div className='sub-education'>Science,Technology, Engineering and Mathematics</div>
                        </li>
                    </ul>
                </div>
                <div className='header-container'>
                    Skills
                </div>
                <div className='skill-content'>
                    <div className='technical-skills'>
                        <div className='header-technical-skills'>
                            Technical Skills :
                        </div>
                        <ul className='technical-skills-content'>
                            <li>HTML5,</li>
                            <li>CSS3,</li>
                            <li>Javascript (ES6),</li>
                            <li>Reactjs,</li>
                            <li>Computer Hardware,</li>
                            <li>Networking Concept,</li>
                            <li>UX/UI design,</li>
                            <li>Phyton Essentials</li>
                        </ul>
                        <div className='header-technical-skills'>
                            Some experienced on it :
                        </div>
                        <ul className='technical-skills-content'>
                            <li>Nodejs,</li>
                            <li>Bootstrap,</li>
                            <li>Tailwindcss,</li>
                            <li>SQL,</li>
                        </ul>
                    </div>
                </div>
                <div className='skill-content'>
                    <div className='technical-skills'>
                        <div className='header-technical-skills'>
                            Soft Skills :
                        </div>
                        <ul className='technical-skills-content'>
                            <li>Communication,</li>
                            <li>Teamwork,</li>
                            <li>Analytical Skills,</li>
                            <li>Responsibility,</li>
                            <li>Lifelong Learning</li>
                        </ul>
                    </div>
                </div>
                <div className='education-content'>
                    <div className='header-container workexp'>
                        Work Experiences
                    </div>
                    <ul className='list-education'>
                    <li>
                            <span className='icon-edu'>
                                <ion-icon name="briefcase" size="small" />
                            </span>
                            <h3 className='header-edu'>
                            Virtual Crafters
                            </h3>
                            <div className='sub-education'>Web Developer (Intern)</div>
                            <div className='sub-detail'>
                                2023 | Pampanga, Philippines
                                <ul className='sub-detaill-list'>
                                    <li>Developing Website base on user requirements</li>
                                    <li>Learning about how to create website design concepts</li>
                                    <li>Be a good worker on working hours and out of work</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="briefcase" size="small" />
                            </span>
                            <h3 className='header-edu'>
                            DEPARTMENT OF LABOR AND EMPLOYMENT (DOLE)
                            </h3>
                            <div className='sub-education'>SPECIAL PROGRAM FOR THE EMPLOYMENT OF STUDENTS (SPES)</div>
                            <div className='sub-detail'>
                                2021 | Pampanga, Philippines
                                <ul className='sub-detaill-list'>
                                    <li>Worked at the municipality to pursue education by providing income through employment</li>
                                    <li>The program provides the youth with valuable experience for better school-to-work transition.</li>
                                    <li>Be a good and responsible student </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <span className='icon-edu'>
                                <ion-icon name="code-slash-outline" size="small" />
                            </span>
                            <h3 className='header-edu'>
                                Todolist
                            </h3>
                            <div className='sub-education'>keyword: Frontend project, Personal project, Website, Reactjs</div>
                            <div className='sub-detail'>
                                March 2024 | Pampanga, Philippines
                                <ul className='sub-detaill-list'>
                                    <li>Lerning how to developing website with vite build-tool</li>
                                    <li>classify elements by components</li>
                                    <li>Tech Stack: Vite.Reactjs</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Maincontent