import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar-gastronomic');
            const buttons = document.querySelectorAll('.buttons-navbar-gastronomic');
            
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(64, 64, 64, 0.6)'; // Color negro transparente
                navbar.style.backdropFilter = 'blur(7px)';
                buttons.forEach(button => {
                    button.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'; // Color negro transparente
                    navbar.style.backdropFilter = 'blur(7px)';
                });
            } else {
                navbar.style.backgroundColor = 'rgba(65, 10, 10, 1)'; // Color inicial
                buttons.forEach(button => {
                    button.style.backgroundColor = 'rgba(65, 10, 10, 0.0)'; // Color inicial
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className='navbar-gastronomic'>
           <div className='navbar-group-gastronomic'>
           <Link to="/" className='buttons-navbar-gastronomic'><span>Bienvenido</span></Link>
                <Link to="/catalog" className='buttons-navbar-gastronomic'><span>Catálogo</span></Link>
                <Link to="/contact" className='buttons-navbar-gastronomic'><span>Contacto</span></Link>
               </div>
        </nav>
    );
};

export default Navbar;
