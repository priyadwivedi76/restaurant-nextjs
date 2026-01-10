import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
const NavBar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase'>
      {/* logo */}
      <div>
        <Link href={'/'}>
          Massimo
        </Link>
      </div>
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default NavBar