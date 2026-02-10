import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Image from 'next/image';
const NavBar = () => {
  const user=true;
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-20 lg:px-20 xl:px-40'>
      {/* Left links */}
      <div className='hidden md:flex flex-1 gap-4'>
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
      </div>
      {/* logo */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href={'/'}>
          Massimo
        </Link>
      </div>
      <div className='md:hidden'>
        <Menu/>
      </div>
      {/* Right links */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 right-2 lg:static flex items-center bg-orange-300 gap-2 p-1 px-2 rounded-md'>
          <Image src='/phone.png' alt='phone' height={20} width={20}/>
          <span>123 456 789</span>
        </div>
        {user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
          )}
          <CartIcon/>
      </div>
    </div>
  )
}

export default NavBar