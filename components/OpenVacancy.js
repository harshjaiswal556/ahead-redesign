import React from 'react'
import "../app/globals.css"
const OpenVacancy = () => {
    return (
        <div className="openVacancy">
            <div className='font-bold text-6xl px-16 py-16'>
                Open vacancies
            </div>
            <div class="cards-wrapper px-16">
                <div class="card card1">
                    <h3>Senior Full-Stack Engineer</h3>
                    <div>
                        <ul>
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€65-85k, 0.5-1.5% equity share options</li>
                        </ul>
                    </div>
                </div>
                <div class="card card2">
                    <h3>Senior Designer</h3>
                    <div>
                        <ul>
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€65-85k, 0.5-1.5% equity share options</li>
                        </ul>
                    </div>
                </div>
                <div class="card card3">
                    <h3>Superstar Intern</h3>
                    <div>
                        <ul>
                            <li>Full-time position</li>
                            <li>Berlin or remote</li>
                            <li>€65-85k, 0.5-1.5% equity share options</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OpenVacancy 
