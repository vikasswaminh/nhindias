import { Drawer, IconButton } from '@material-ui/core'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import { navData } from '../dummyData'
import { HiOutlineChevronDoubleRight, HiChevronRight } from 'react-icons/hi'
import { useState } from 'react'
const NavDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const [showSubmenu, setShowSubmenu] = useState('')
    return (
        <div className='flex lg:hidden'>
            <Drawer
                open={open}
                anchor='right'
                onClose={handleClose}
            >
                <div className="flex lg:hidden p-3 bg-themeColor hover:bg-lightBlack text-white  ml-auto" onClick={() => { setOpen(false) }}>
                    <MdOutlineClose className='text-2xl' />
                </div>
                <div className="min-w-[20rem] mt-4">
                    <ul className="flex flex-col">
                        {navData.map((route, i) => (
                            <div
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay={`${i + 2}00`}
                                key={i}
                                className='flex flex-col border-b border-gray-200 '>
                                <li
                                    onClick={() => { showSubmenu === route.label ? setShowSubmenu('') : setShowSubmenu(route.label) }}
                                    className='flex  items-center justify-between w-full  cursor-pointer px-4  py-4 '>
                                    <Link href={route.slug}>
                                        <a className='text-lg  hover:text-themeColor  font-semibold text-lightBlack hover:text-violet hover:underline'>
                                            {route.label}
                                        </a>
                                    </Link>
                                    <div className={`${showSubmenu === route.label ? 'rotate-90' : 'rotate-0 '}`}>
                                        {route.submenu && <HiOutlineChevronDoubleRight />}
                                    </div>
                                </li>
                                {showSubmenu === route.label &&
                                    <div className="pl-8 pb-4 flex flex-col w-full h-fit bg-white">
                                        {route?.submenu?.map((route, i) => (
                                            <Link key={i} href={route.slug}>
                                                <a className='flex py-2 items-center  space-x-2'>
                                                    <HiChevronRight /> <h3 className=' font-semibold'>{route.heading}</h3>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                }
                            </div>
                        ))}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay={`500`}
                            className='flex flex-col border-b border-gray-200 '>
                            <li className='flex items-center cursor-pointer px-4 hover:pr-2 py-4 '>
                                <Link href='/networkers-home-contact-us'>
                                    <a className='text-lg font-ubuntu hover:text-themeColor  font-semibold text-lightBlack hover:text-violet hover:underline'>
                                        Contact Us
                                    </a>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </Drawer>
        </div>
    )
}

export default NavDrawer