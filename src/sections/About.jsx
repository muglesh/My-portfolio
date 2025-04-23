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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloremque excepturi officia
                            quis sit. Ad dignissimos distinctio iusto omnis sequi vel. Aliquid, cumque cupiditate
                            delectus deserunt ea exercitationem fuga incidunt magni minima molestias nam necessitatibus
                            odio optio placeat quo quod repudiandae sequi soluta ullam vitae. Aspernatur cupiditate
                            illum sit tempora.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About
