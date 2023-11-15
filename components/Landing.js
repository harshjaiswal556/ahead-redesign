import React from 'react'

const Landing = () => {
  return (
    <div className='bg-[#eeeafd] mt-4 rounded-3xl p-28 py-36 grid grid-cols-2'>
      <div className='flex flex-col gap-4'>
        <div className='text-lg font-medium opacity-70'>Ahead App</div>
        <div className='font-bold text-8xl'>
          Master your life by mastering emotions
        </div>
        <img
          src='/app-store.svg'
          alt=''
          className='max-w-[150px]'
        />
      </div>
      <div></div>
    </div>
  )
}

export default Landing
