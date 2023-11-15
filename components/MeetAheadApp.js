import React from 'react'
import "../app/globals.css"
import { motion } from "framer-motion"
const MeetAheadApp = () => {
    return (
        <div className="meetAheadApp bg-[#eeeafd] mt-4 rounded-3xl py-16">
            <motion.div initial={{
                x: -400, opacity: 1
            }} whileInView={{
                x: 0, opacity: 1
            }} transition={{
                delay: 1,
                duration: 1
            }} className='text-lg font-medium opacity-70 px-16'>Built out of frustration</motion.div>
            <motion.div initial={{
                x: -1000, opacity: 1
            }} whileInView={{
                x: 0, opacity: 1
            }} transition={{
                delay: 2,
                duration: 1
            }} className='font-bold text-7xl px-16'>
                Meet the ahead app
            </motion.div>
            <div className='center-vertical-img bg-[#eeeafd] mt-4 rounded-3xl grid grid-cols-2'>
                <motion.div initial={{
                    x: -700, opacity: 1
                }} whileInView={{
                    x: 0, opacity: 1
                }} transition={{
                    delay: 2,
                    duration: 1
                }}>
                    <img
                        src='/meet.png'
                        alt=''
                    />
                </motion.div>
                <motion.div initial={{
                    x: -1260, opacity: 1
                }} whileInView={{
                    x: 0, opacity: 1
                }} transition={{
                    delay: 1,
                    duration: 1
                }} className='center-vertical flex flex-col gap-4'>
                    <div className='text-32px'>
                        <p>
                            A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence.
                        </p>
                        <br></br>
                        <p>
                            Think of it as a pocket cheerleader towards a better, more fulfilling.
                        </p>
                    </div>
                    <div className='text-28px'>
                    </div>
                </motion.div>

                <div></div>
            </div>
        </div>
    )
}

export default MeetAheadApp
