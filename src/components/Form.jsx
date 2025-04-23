import React from 'react'

const Form = () => {
    return (
        <form name="contact" method={'POST'} data-netlify={'true'}>
            <input type="hidden" name='form-name' value='contact'/>
            <div className="mb-4">
                <label htmlFor="name" className='mb-2 inline-block font-semibold'>
                    Name
                </label>
                <input className='h-[45px] w-full rounded-sm bg-slate-900 pl-6'
                       type="text"
                       id="name"
                       name='name'
                       required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className='mb-2 inline-block font-semibold'>
                    Email
                </label>
                <input className='h-[45px] w-full rounded-sm bg-slate-900 pl-6'
                       type="email"
                       id="email"
                       name='email'
                       required
                />
            </div>
            <div className="md-4">
                <label htmlFor="email" className='mb-2 inline-block font-semibold'>
                    Message
                </label>
                <textarea
                    className='w-full rounded-sm bg-slate-900 pl-3 pt-1'
                    name="message"
                    id="message" cols="30" rows="10"></textarea>
            </div>
            <button className='mt-3 px-4 py-3 capitalize font-semibold
                            bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md flex items-center gap-2 cursor-pointer'>
                Send Message
            </button>
        </form>
    )
}
export default Form
