import React from 'react'
import AboutImg from '../assets/about.png'
import Title from "../components/Title.jsx";

const About = () => {
    return (
        <section id='about' className='pt-32'>
            <div className="container">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center w-full">
                    <div className="mb-8 md:mb-0">
                        <img className='object-cover rounded-2xl' src={AboutImg} alt="About image"/>
                    </div>
                    <div>
                        <Title title='about' highlight='me' isCenter={false} content='get to know me better'/>
                        <p>
                            I'm a Computer Science Engineering graduate with a specialization in Artificial Intelligence
                            from Chandigarh University, passionate about developing smart, user-friendly web
                            applications. I enjoy working with technologies like React, Tailwind CSS,
                            Firebase, and Redux Toolkit to build responsive and dynamic interfaces. My interests span
                            both frontend and backend development, with a growing focus on integrating AI-powered
                            features into everyday tools. I’m always
                            eager to learn new technologies, take on challenging problems, and collaborate on impactful
                            tech solutions.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About
