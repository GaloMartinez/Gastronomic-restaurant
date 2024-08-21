import React from 'react';
import Gallery from './Gallery';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    return (
        <>
            <section className='welcome-section-gastronomic'>
                <img src="/img/pizza-background.jpg" className='welcome-img-gastronomic' alt="Pizza Background" />
                <h1>¡Bienvenidos a La Bella Pizza Italiana!</h1>
                <p>Explora nuestro catálogo de productos y contáctanos para más información.</p>
                <div className='welcome-group-buttons'>
                <Link to="/catalog"> <button className='welcome-buttons'>
                        Catalogo
                    </button></Link>
                    <Link to="/contact"> <button className='welcome-buttons'>
                        Contacto
                    </button></Link>

                </div>
            </section>

            <section className='welcome-section-description-gastronomic'>
                <p>¡Bienvenidos a La Bella Pizza Italiana! En nuestro restaurante, te invitamos a disfrutar de la auténtica pizza italiana, elaborada con las recetas tradicionales y los ingredientes más frescos que capturan el verdadero sabor de Italia. Desde el primer bocado, te transportarás a las encantadoras trattorias italianas, en un ambiente que te hará sentir como en casa, pero en el corazón de Italia. Nos esforzamos por ofrecerte no solo una comida deliciosa, sino también una experiencia completa que refleja la calidez y hospitalidad italiana. Aquí, cada detalle está pensado para que vivas una velada inolvidable, rodeado de los aromas, sabores y sensaciones que te harán sentir como si estuvieras en Italia. ¡Ven y déjanos hacerte sentir como en casa, en Italia! Benvenuti e buon appetito!</p>
                <div className='welcome-description-group-full'>
                    <div className='welcome-description-group'>
                        <h1>Pizza</h1>
                        <p>Ofrecemos pizza italiana,  tradicional y gourmet.</p>
                    </div>

                    <div className='welcome-description-group'>
                        <h1>Ambiente</h1>
                        <p>Ofrecemos un ambiente minimalista y acogedor.</p>
                    </div>

                    <div className='welcome-description-group'>
                        <h1>Sucursales</h1>
                        <p>Disponemos de varias sucursales en toda la Argentina.</p>
                    </div>

                </div>

            </section>
            <section className='welcome-gallery-section'>
                <Gallery />
            </section>
        </>
    );
};

export default Welcome;
