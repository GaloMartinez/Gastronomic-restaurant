import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar-gastronomic');
            const buttons = document.querySelectorAll('.buttons-navbar-gastronomic');

            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(64, 64, 64, 0.6)';
                navbar.style.backdropFilter = 'blur(7px)';
                buttons.forEach(button => {
                    button.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
                });
            } else {
                navbar.style.backgroundColor = 'rgba(65, 10, 10, 1)';
                buttons.forEach(button => {
                    button.style.backgroundColor = 'rgba(65, 10, 10, 0.0)';
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar-gastronomic'>
            <div className='navbar-group-gastronomic'>
                <button className='hamburger' onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className='buttons-navbar-gastronomic'><span>Bienvenido</span></Link>
                    <Link to="/catalog" className='buttons-navbar-gastronomic'><span>Catálogo</span></Link>
                    <Link to="/contact" className='buttons-navbar-gastronomic'><span>Contacto</span></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
