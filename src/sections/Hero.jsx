import React from 'react'
import HeroImg from '../assets/hero.png';

const Hero = () => {
    return (
        <section id="home">
            <div className="z-40">
                <div className="container flex h-screen items-center text-center justify-center">
                    <div className='max-w-[800px] mx-auto'>
                        <div className='mb-6'>
                            <img src={HeroImg} alt="hero image"
                                 className='size-[150px] rounded-full mx-auto '/>
                        </div>

                        <div>
                            <h1 className='font-poppins mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl'>
                                Crafting <span className='bg-gradient-to-r from-blue-600 to-purple-600
                        bg-clip-text text-transparent'> Smooth </span>
                                Web Experience
                            </h1>
                            <p className='mb-4 md:text-lg'>
                                I craft beautiful and functional web experiences that engage users
                                and bring ideas to life. Let's build something amazing together
                            </p>
                            <a className='px-6 py-3 inline-block capitalize font-semibold
                            bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md'
                               href="#project">View my work</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
