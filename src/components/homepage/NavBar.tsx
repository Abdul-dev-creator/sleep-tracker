"use client"
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Link from 'next/link'
import { useState } from 'react'


const navLinks = [
    {href:"#home",label:"Home"},
    {href:"#about",label:"About"},
    {href:"#faq",label:"Faq"},
    {href:"#contact",label:"Contact"},
]

export default function NavBar() {
 const [isOpenMenu, setIsMenuOpen] = useState(false);   
  return (
    <nav className='px-6 h-18 sm:px-20 flex items-center justify-between z-20 relative '>
      <Logo/>

      {/* Desktop menu */}

      <ul className='hidden md:flex opacity-90 bg-[#0f172a] gap-10 p-3 px-8 text-gray-300 rounded-full'>
        {navLinks.map((link) => {
            return (
            <li key={link.href}>
            <Link className='hover:text-fuchsia-600 transition' href={link.href}>{link.label}</Link>
            </li>
            )
        })}
      </ul>

      <button onClick={() => setIsMenuOpen(!isOpenMenu)} className='md:hidden z-50 text-gray-300 cursor-pointer'>
        {isOpenMenu ? <X size={28}/> : <Menu size={28}/>}
      </button>

      {/* signin button */}
      <Link href="/login" className='hidden md:block px-6 py-2 rounded-full hover:bg-fuchsia-600 transition font-semibold text-white bg-fuchsia-700'>Sign In</Link>

      {/* mobile devices */}
      <ul className={`md:hidden fixed top-0 left-0 w-full h-screen z-40 bg-slate-900 flex flex-col items-center justify-center gap-8 text-gray-400 ${isOpenMenu ?"translate-x-0":"translate-x-full"}`}>
        {navLinks.map((link)=> {
        return (
            <li key={link.href}>
            <Link className='text-2xl hover:text-fuchsia-500 transition-colors' href={link.href}>{link.label}</Link> 
            </li>
        )
        })}
        {/* signin buttom for mobile */}
        <Link href="/login" className='md:hidden block px-6 py-2 rounded-full hover:bg-fuchsia-600 transition font-semibold text-white bg-fuchsia-700'>Sign In</Link>
      </ul>
    </nav>
  )
}
