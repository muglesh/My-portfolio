import React from 'react'
import Title from "../components/Title.jsx";
import {skills} from "../utils/constants.js";

const Skills = () => {
    return (
        <section id="skills" className='pt-32'>
            <div className="container">
                <Title
                    title={'my'}
                    highlight={'skills'}
                    content={'Here are some of the technologies I have worked with'}
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-8">
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className='flex items-center gap-2 flex-col'>
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className='size-12 hover:-translate-y-2 transition-transform duration-500 ease-in-out md:size-16'
                                />
                                <span className='font-bold'>{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Skills
