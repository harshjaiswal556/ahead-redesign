import React from 'react'

const Nav = () => {
  return (
    <nav className='flex items-center justify-between gap-6 px-10 my-5'>
      <img
        src='/logo.png'
        alt='logo'
        className='w-12 h-12 rounded-xl'
      />
      <div className='flex gap-6 font-medium'>
        <div>Emotions</div>
        <div>Manifesto</div>
        <div>Self-awareness test</div>
        <div>Work With us</div>
      </div>
      <div className='p-6 py-3 font-normal text-white bg-black rounded-full'>
        Download App
      </div>
    </nav>
  )
}

export default Nav
