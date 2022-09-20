import React, { useEffect, useState } from 'react'
import { navData } from '../dummyData'
import { GrMenu } from 'react-icons/gr'
import { FaChevronDown } from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai'
import Logo from '../common/Logo'
import NavDrawer from './NavDrawer'
import Button from '../common/Button'
import TopBar from './TopBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Index = () => {
    const [open, setOpen] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState('')
    const [lastYPos, setLastYPos] = React.useState(0);
    const [shouldShowActions, setShouldShowActions] = React.useState(false);

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;

            setShouldShowActions(isScrollingUp);
            setLastYPos(yPos);
        }

        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastYPos]);
    const router = useRouter()
    const page = router.pathname.split('/')[1] === '' ? '/' : router.pathname.split('/')[1]
    console.log(page)
    useEffect(() => {
        if (typeof window != 'undefined') {
            setTimeout(() => {
                var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
                (function () {
                    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                    s1.async = true;
                    s1.src = 'https://embed.tawk.to/5fa105ebe019ee7748f03b4b/default';
                    s1.charset = 'UTF-8';
                    s1.setAttribute('crossorigin', '*');
                    s0.parentNode.insertBefore(s1, s0);
                })();
                <script async defer src="https://cdn.boei.help/hello.js"></script>
            }, 2000);
        }
    }, [])
    return (
        <>

            <TopBar />
            <motion.a
                href='#'
                className="fixed z-50 p-4 hover:scale-105 transition-all duration-300  text-white text-xl bg-themeColor rounded-full right-4 bottom-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: shouldShowActions ? 1 : 0 }}
                transition={{ opacity: { duration: 0.2 } }}
            >
                <AiOutlineArrowUp />
            </motion.a>
            <header
                style={{
                    boxShadow: '0 4px 40px rgba(0,0,0,.08)'
                }}
                className='flex z-50 bg-white sticky md:inset-4 md:rounded-lg m-0 inset-0 md:m-4  py-1 md:py-2 justify-center'>
                <NavDrawer open={open} setOpen={setOpen} />
                <div className="w-full px-4 lg:px-8 !overflow-visible flex justify-between">
                    <div className="h-full items-center flex ">
                        <Logo />
                    </div>
                    <nav className='flex items-center'>
                        <ul className='space-x-8 hidden lg:flex'>
                            {navData.map(({ label, slug, submenu }, i) => (
                                <li
                                    onMouseEnter={() => setShowSubmenu(label)} onMouseLeave={() => setShowSubmenu('')}
                                    key={i} className='relative group h-full group flex space-x-3 items-center '>

                                    <Link href={slug}>
                                        <a className={`${page === slug ? 'text-themeColor' : 'text-themeDark'} ${submenu ? 'group-hover:text-themeColor' : 'link'} flex  text-lg font-medium text-lightBlack`}>
                                            {label}
                                        </a>
                                    </Link>
                                    {submenu &&
                                        <FaChevronDown className='group-hover:text-themeColor' />
                                    }
                                    {submenu && showSubmenu === label &&
                                        <ul
                                            style={{
                                                boxShadow: '0px 1px 28px -15px rgba(0,0,0,0.75)',
                                                background: 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3))'
                                            }}
                                            className='absolute rounded-lg top-[100%] z-20 left-[-2rem] w-[120%] backdrop-blur-lg overflow-hidden  flex flex-col'>
                                            {submenu.map(({ heading, slug, description }, i) => (
                                                <li
                                                    key={i}
                                                    className={`p-4 h-fit bg-white hover:bg-gray-50 cursor-pointer border-b`}>
                                                    <Link href={slug}>
                                                        <a>
                                                            <h3 className='text-base font-semibold'>{heading}</h3>
                                                            <p className='text-xs md:text-sm'>{description}</p>
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link href='/networkers-home-contact-us'>
                        <a
                            className="hidden lg:flex items-center">
                            <Button text='Contact Us' />
                        </a>
                    </Link>
                    <div
                        className="flex lg:hidden items-center ">
                        <div className=' cursor-pointer py-1 px-2'>
                            <GrMenu className='text-2xl' onClick={() => setOpen(true)} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Index