import React from 'react'

const Title = ({title, highlight, isCenter = true, content}) => {
    return (
        <div className={`${isCenter ? 'text-center' : 'text-left'} mb-6 capitalize`}>
            <h2 className='text-2xl font-bold mb-2 md:text-3xl lg:text-4xl capitalize'>
                {title} <span className='bg-gradient-to-r from-blue-600 to-purple-600
                        bg-clip-text text-transparent'> {highlight}</span>
            </h2>
            <p className='text-gray-400'>
                {content}
            </p>
        </div>
    )
}
export default Title
