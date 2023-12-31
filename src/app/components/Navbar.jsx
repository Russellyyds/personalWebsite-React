"use client"
import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'
import { useState } from 'react'
import MenuOverlay from './MenuOverlay'
const navLinks = [{
    title: "About",
    path: "#about"
}, {
    title: "Projects",
    path: "#projects"
}, {
    title: "Contact",
    path: "#contact"
}
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
                    Russell Pan
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ?
                            <button onClick={()=>{
                                setNavbarOpen(true)
                            }} className='flex items-start px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            :
                            <button onClick={()=>{
                                setNavbarOpen(false)
                            }} className='flex items-start px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path}><span className=' font-bold text-blue-300'>{link.title}</span></NavLink>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            {navbarOpen?<MenuOverlay links={navLinks}/>:null}
        </nav>
    )
}

export default Navbar