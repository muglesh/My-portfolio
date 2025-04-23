import React, {useEffect, useState} from 'react'

const navigation = [
    {title: 'home', url: '#home'},
    {title: 'project', url: '#project'},
    {title: 'about', url: '#about'},
    {title: 'skills', url: '#skills'},
    {title: 'contact', url: '#contact'},
]
const Navbar = ({isClicked, toggleNavClick}) => {
    const [activeLink, setActiveLink] = useState('home');


    useEffect(() => {
        const handleScroll = () => {
            const scrollPositon = window.scrollY;
            const sections = document.querySelectorAll('section[id]');

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPositon >= sectionTop && scrollPositon <= sectionHeight + sectionTop) {
                    setActiveLink(section.id);
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <>
            <nav className={`${isClicked ? 'translate-x-0' : '-translate-x-[190.25rem]'} fixed left-0 h-screen top-0 w-full flex items-center justify-start
                transition-all duration-500 md:hidden`}>
                <ul className="h-full w-[60%] bg-gray-900 pl-4 pt-22">
                    {navigation.map((item) => (
                        <li key={item.title} className='mb-4 text-lg font-medium capitalize'>
                            <a href={item.url}
                               className={`${activeLink === item.title ? 'text-blue-600' : 'text-white'} hover:text-blue-600 transition-colors duration-300 ease-in`}
                               onClick={toggleNavClick}
                            >
                                {item.title}</a>
                        </li>
                    ))}

                </ul>
            </nav>

            <nav className="hidden md:inline-flex">
                <ul className="flex gap-10 capitalize">
                    {navigation.map((item) => (
                        <li key={item.title} className='inline-block'>
                            <a href={item.url}
                               className={`relative font-medium font-semibold capitalize after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] 
                               after:w-[20px] after:rounded-xl after:transition-all after:duration-300 after:ease-in
                               hover:after:bg-blue-600 hover:after:w-full
                                ${activeLink === item.title ? 'text-blue-600 after:bg-blue-600 relative after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-full after:rounded-xl' : 'text-white'} hover:text-blue-600 transition-colors duration-300 ease-in`}
                               onClick={toggleNavClick}
                            >
                                {item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
export default Navbar
