import React from 'react'
import "../app/globals.css"
import { motion } from "framer-motion"

const boxVarient = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 1 } },
    hidden: { opacity: 0, scale: 0 }
}
const OpenVacancy = () => {
    return (
        <div className="openVacancy">
            <div className='font-bold text-6xl px-16 py-16'>
                Open vacancies
            </div>
            <div class="cards-wrapper px-16">
                <motion.div variants={boxVarient} initial="hidden" whileInView="visible" transition={{ delay: 1 }} class="card card1">
                    <h3>Senior Full-Stack Engineer</h3>
                    <div>
                        <ul>
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€65-85k, 0.5-1.5% equity share options</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div variants={boxVarient} initial="hidden" whileInView="visible" transition={{ delay: 1 }} class="card card2">
                    <h3>Senior Designer</h3>
                    <div>
                        <ul>
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€65-85k, 0.5-1.5% equity share options</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div variants={boxVarient} initial="hidden" whileInView="visible" transition={{ delay: 1 }} class="card card3">
                    <h3>Superstar Intern</h3>
                    <div>
                        <ul>
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€65-85k, 0.5-1.5% equity share options</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default OpenVacancy 
