import React from 'react'
import { motion } from "framer-motion"
const Landing = () => {
  return (
    <div className='bg-[#eeeafd] mt-4 rounded-3xl p-28 py-36 grid grid-cols-2'>
      <motion.div initial={{
        x: -30, opacity: 0
      }} whileInView={{
        x: 0, opacity: 1
      }} transition={{
        duration: 1,
      }} className='flex flex-col gap-4'>
        <div className='text-lg font-medium opacity-70'>Ahead App</div>
        <div className='font-bold text-7xl'>
          Master your life by mastering emotions
        </div>
        <img
          src='/app-store.svg'
          alt=''
          className='max-w-[150px]'
        />
      </motion.div>
      <motion.div initial={{
        x: 80, opacity: 0
      }} whileInView={{
        x: 0, opacity: 1
      }} transition={{
        duration: 1,
      }}>
        <img
          src='/master.png'
          alt=''
        />
      </motion.div>
      <div></div>
    </div>
  )
}

export default Landing
