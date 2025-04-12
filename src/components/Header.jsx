import React, { useState } from 'react';
import '../styles/Header.css';

import Logo from '../assets/images/logo.jpg';
// import {motion} from 'framer-motion';


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <header className="header" style={{backgroundColor:'black'}}>
            {/* <div className="header-menu-img-wrapper">
                <img src={Menu} alt='Menu изображение' className='header-menu-img'
                {()=> setToggleMenu(true)}/>
            </div> */}
            <nav className="header-nav">
                <ul className="header-ul">
                    <li>Главная</li>
                    <li>Продукты</li>
                    <li>Цены</li>
                    <li>О нас</li>
                </ul>
            </nav>
            <div>
                <img src={Logo} alt='Logo изображение сайта' className="header-logo"/>
            </div>
            
            {toggleMenu && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity:100}}
                    transition={{duration:0.3}}
                    className='header-mobile'
                >
                    {/* <div>
                        <img src={Close} alt='Close иконки изображение'
                         className='header-mobile-close-img' onClick={() => setToggleMenu(false)}/>
                    </div> */}
                    <nav>
                        <ul className='header-mobile-ul'>
                            <li>Главная</li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Header