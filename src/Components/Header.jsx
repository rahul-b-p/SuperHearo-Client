import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import dinkanLogo from '../assets/img/dinkan-flying.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    const [active, setActive] = useState('home')
    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(active);

    return (
        <>
            <header id="header" className="header d-flex align-items-center px-3 sticky-top">
                <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
                    <Link to={'/'} style={{ textDecoration: 'none' }} className="logo d-flex align-items-center">
                        <img src={dinkanLogo} alt="" />
                        <h1 className="sitename">Dinkan</h1>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link style={{ textDecoration: 'none' }} to={'/'} onClick={() => setActive('home')} className={active == 'home' ? 'active' : null}>Home</Link></li>
                            <li><Link onClick={() => setActive('about')} style={{ textDecoration: 'none' }} to={'/about'} className={active == 'about' ? 'active' : null} >About</Link></li>
                            <li><Link onClick={() => setActive('grevience')} style={{ textDecoration: 'none' }} to={'/grevience'} className={active == 'grevience' ? 'active' : null} >Contact</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={handleClick}></i>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem ><Link style={{ textDecoration: 'none' }} to={'/'} onClick={() => setActive('home')}>Home</Link></MenuItem>
                            <MenuItem ><Link onClick={() => setActive('about')} style={{ textDecoration: 'none' }} to={'/about'} >About</Link></MenuItem>
                            <MenuItem ><Link onClick={() => setActive('grevience')} style={{ textDecoration: 'none' }} to={'/grevience'} >Contact</Link></MenuItem>
                        </Menu>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header