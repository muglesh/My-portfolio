import React from 'react'

const Footer = () => {
    return (
        <footer className='pt-32 pb-6 text-center text-gray-400 '>
            <div className="container">
                <p className='text-sm'>Copyright &copy; Muglesh Babu {new Date().getFullYear()}. All rights
                    reserved</p>
            </div>
        </footer>
    )
}
export default Footer
