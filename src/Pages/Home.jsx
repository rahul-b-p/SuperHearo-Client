import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <>
            <header id="header" class="header bg-primary d-flex align-items-center fixed-top">
                <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <Link to={'/'} class="logo d-flex align-items-center">
                        <h1 class="sitename"></h1>
                    </Link>

                    <nav id="navmenu" class="navmenu">
                        <ul>
                            <li><Link to={''}>Home</Link></li>
                            <li><Link to={''}>about</Link></li>
                            <li><Link to={''}>Grevience</Link></li>
                        </ul>
                        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Home