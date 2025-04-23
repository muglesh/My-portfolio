import React from 'react'
import Title from "../components/Title.jsx";
import Form from "../components/Form.jsx";
import {Facebook, Instagram, Linkedin, Mail, Phone} from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className='pt-32'>
            <div className="container">
                <Title
                    title={"contact"}
                    content={"get in touch with me"}
                    highlight={"me"}/>
                <div className="md:grid md:grid-cols-2 md:gap-16">
                    <Form/>

                    <div className="mb-16 mt-8">
                        <div className="mb-2 flex flex-wrap items-center justify-start gap-2">
                            <Phone className='size-5'/>
                            <a
                                className='text-lg font-semibold transition-colors duration-300 hover:text-blue-600'
                                href="tel: 9908497578"
                            >
                                9908497578
                            </a>
                        </div>
                        <div className="mb-4 flex flex-wrap items-center justify-start gap-2">
                            <Mail className='size-5'/>
                            <a
                                className='text-lg font-semibold transition-colors duration-300 hover:text-blue-600'
                                href="mailto: mugibabu8@gmail.com"
                            >
                                mugibabu8@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-wrap items-center justify-start gap-4">
                            <a
                                className='hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out'
                                href="#">
                                <Facebook className='size-6'/>
                            </a>
                            <a
                                className='hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out'
                                href="#">
                                <Instagram className='size-6'/>
                            </a>
                            <a
                                className='hover:-translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out'
                                href="#">
                                <Linkedin className='size-6'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
