import { faFacebook, faInstagram, faTelegram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer id="footer" className="footer transparent-background">
                <div className="container">
                    <div className="copyright text-center">
                        <p>© <span>Copyright</span> <strong className="px-1 sitename">Official@Dinkan</strong> <span>All Rights Reserved</span></p>
                    </div>
                    <div className="social-links d-flex justify-content-center">
                        <Link><FontAwesomeIcon icon={faWhatsapp} /></Link>
                        <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link><FontAwesomeIcon icon={faTelegram} /></Link>
                        <Link><FontAwesomeIcon icon={faXTwitter} /></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer