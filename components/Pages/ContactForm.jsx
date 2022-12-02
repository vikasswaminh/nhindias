import React, { useEffect, useState } from 'react'
import { BsPerson, BsTelephone } from 'react-icons/bs'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { useForm, ValidationError } from '@formspree/react';
import Button from '../common/Button';
import Link from 'next/link';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mbjpalad");
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (state.succeeded) {
            setOpen(true)
        }
    }, [state])
    const handleClose = () => {
        setOpen(!open);
    };
    return (
        <div className=" grid py-6 gap-10 grid-cols-1 lg:grid-cols-2">

            <div className="w-full min-h-[35rem] h-full max-w-[40rem] mx-auto">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.536416677523!2d77.6321219!3d12.9151697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6908c0bcd3bc3460!2sNETWORKERS%20HOME%20-%20CCIE%20CCNP%20and%20CCNA%20Training%20company%20offering%20AWS%2C%20CEH%20and%20Cyber%20security%20training%20courses!5e0!3m2!1sen!2sae!4v1655464379255!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            {open ?
                <div className=" min-h-[40rem] h-full flex items-center justify-center relative">
                    <div className="p-12 lg:p-20 shadow-2xl rounded-2xl">
                        <div className="p-6 border border-green-300 bg-green-100 rounded-2xl">
                            <div className="text-green-600 text-lg text-center max-w-[300px]">Thank you! Your submission has been received!</div>
                        </div>
                    </div>
                </div>
                :
                <form onSubmit={handleSubmit} className="max-w-[40rem] mx-auto rounded-lg shadow-2xl w-full p-4 lg:p-10 flex flex-col space-y-6 h-full ">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor='name' className='text-base opacity-80'>Your name*</label>
                        <div className="flex focus-within:shadow-md items-center border border-themeColor rounded-full p-2 overflow-hidden">
                            <div className="w-fit p-2 h-full bg-gray-100 rounded-full">
                                <BsPerson className='text-2xl text-themeColor' />
                            </div>
                            <input
                                id='name'
                                type="text"
                                required
                                name='name'
                                className="flex-1 p-2 outline-none "
                                placeholder='Enter your name'
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor='Email' className='text-base opacity-80'>Email address *</label>
                        <div className="flex focus-within:shadow-md items-center border border-themeColor rounded-full p-2 overflow-hidden">
                            <div className="w-fit p-2 h-full bg-gray-100 rounded-full">
                                <HiOutlineMailOpen className='text-2xl text-themeColor' />
                            </div>
                            <input
                                id='Email'
                                required
                                name='email'
                                type="email"
                                className="flex-1 p-2 outline-none "
                                placeholder='Enter your Email'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor='Phone' className='text-base opacity-80'>Phone Number *</label>
                        <div className="flex focus-within:shadow-md items-center border border-themeColor rounded-full p-2 overflow-hidden">
                            <div className="w-fit p-2 h-full bg-gray-100 rounded-full">
                                <BsTelephone className='text-2xl text-themeColor' />
                            </div>
                            <input
                                id='Phone'
                                name='phone'
                                required
                                type="text"
                                className="flex-1 p-2 outline-none "
                                placeholder='Enter Mobile Number'
                            />
                            <ValidationError
                                prefix="Phone"
                                field="phone"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <textarea
                        cols="30"
                        className='border border-themeColor outline-none p-4 rounded-xl focus:shadow-md'
                        rows="6"
                        name='message'
                    ></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <div className="flex flex-col space-y-4 py-6 border-t border-gray-300">
                        <div className="flex space-x-4 items-center">
                            <input type="checkbox"
                                required
                                id='check'

                            />
                            <label htmlFor='check' className='text-base cursor-pointer'>I agree with <Link href='/terms-of-use'><a className='text-themeColor underline'>Terms of Use</a></Link> and
                                <Link href='/privacy-policy'><a className='text-themeColor underline'> Privacy Policy</a></Link>.
                            </label>
                        </div>
                        <button disabled={state.submitting} className="w-[12rem]"> <Button text={state.submitting ? 'Just a moment...' : 'Submit'} /></button>
                    </div>
                </form>
            }
        </div>
    )
}

export default ContactForm