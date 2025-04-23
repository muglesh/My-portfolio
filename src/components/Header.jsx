import React, {useEffect, useState} from 'react'
import Navbar from "./Navbar.jsx";
import {AlignLeft, X} from "lucide-react";

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll >= 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const toggleNavClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <header className={`${
            scrolling
                ? 'backdrop-blur-sm bg-gradient-to-r from-neutral-900/50 via-neutral-900/50 to-gray-900/50 animate-in duration-500'
                : 'bg-transparent duration-500 animate-out'
        } fixed top-0 z-[100] w-full`}>
            <div className='container flex justify-between items-center py-4'>
                {/*    logo*/}
                <div className='z-10'>
                    <a href="/" className='font-bold top-0 text-white md:text-lg'>Manohar
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600
                        bg-clip-text text-transparent'> Muglesh </span>
                        Babu</a>
                </div>
                {/*    navbar*/}
                <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick}/>

                {/*    menu bar*/}
                <button onClick={toggleNavClick} className="text-white z-10 flex items-center md:hidden cursor-pointer">
                    {
                        isClicked
                            ? <X size={28}/>
                            : <AlignLeft size={28}/>
                    }


                </button>
            </div>
        </header>
    )
}
export default Header
