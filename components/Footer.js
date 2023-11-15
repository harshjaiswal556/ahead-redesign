import React from 'react'
import "../app/globals.css"
const Footer = () => {
    return (
        <>

            <div className="footer">
                <hr width="100%" height="2px" />
                <div className="center-horizontal">
                    <img
                        src='/footerIcon.png'
                        alt=''
                        className='footer-logo max-w-[100px]'
                    />
                    <img
                        src='/contact.png'
                        alt=''
                        className='footer-logo'
                    />
                    <img width="180px"
                        src='/app-store.svg'
                        alt=''
                        className='footer-logo-app'
                    />
                    <p className='grey-text'>© 2022 Ahead app. All right reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer 
