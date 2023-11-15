import React from 'react'
import "../app/globals.css"
const StartATest = () => {
    return (
        <div className="startATest">
            <div className='center-horizontal'>
                <h3 className='py-2 text-xl'>We take privacy seriously</h3>
                <h1 className='py-2 text-3xl font-bold'>Before you get started</h1>
                <h3 className='py-2 text-2xl'>We won't share your answers with anyone (and won't tell ever you which friends said what about you)</h3>
                <img src='/sign.png'
                    alt=''
                    className='py-6 max-w-[280px]' />
                <div className='btn p-6 py-3 font-normal text-white bg-black rounded-full'>
                    Start a test
                </div>
                <h3 className='py-2 text-normal'>Take only 5 minutes</h3>
            </div>
        </div>
    )
}

export default StartATest
