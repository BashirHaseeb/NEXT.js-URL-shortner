import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='flex justify-between items-center bg-purple-600 px-5 py-2 text-white'>
            <div className='text-2xl font-bold'>
                Link-Blink
            </div>
            <ul className='flex justify-center items-center gap-5 font-semibold'>

                <Link href="/"> <li>Home</li></Link>
                <Link href="/about"> <li>About</li></Link>
                <Link href="/shortner"> <li>Shorten</li></Link>
                <Link href="/contact"> <li>Contact Us</li></Link>

             <li className='flex justify-center items-center gap-3'>
                <Link href="/shortner"> <button className='bg-purple-400 p-1 rounded-md hover:bg-purple-300' >Try Now</button></Link>
                <a href="https://github.com/Falcon-Abdullah" target='_blank' ><button className='bg-purple-400 p-1 rounded-md hover:bg-purple-300'  >GitHub</button> </a>
             </li>
            </ul>
        </nav>
    )
}

export default Navbar
