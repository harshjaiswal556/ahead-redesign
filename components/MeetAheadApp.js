import React from 'react'
import "../app/globals.css"
const MeetAheadApp = () => {
    return (
        <div className="meetAheadApp bg-[#eeeafd] mt-4 rounded-3xl py-16">
            <div className='text-lg font-medium opacity-70 px-16'>Built out of frustration</div>
            <div className='font-bold text-7xl px-16'>
                Meet the ahead app
            </div>
            <div className='center-vertical-img bg-[#eeeafd] mt-4 rounded-3xl grid grid-cols-2'>
                <img
                    src='/meet.png'
                    alt=''
                />
                <div className='center-vertical flex flex-col gap-4'>
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
                </div>

                <div></div>
            </div>
        </div>
    )
}

export default MeetAheadApp
