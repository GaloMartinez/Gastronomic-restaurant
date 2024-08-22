import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        if ([name, email, message].includes('')) {
            console.log('Hay al menos un campo vacío');
            return;
        }

        emailjs
            .sendForm(
                "service_ouqnegv",
                "template_kzfga72",
                event.target,
                "OpnB1q9SZaAPuGkBQ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setResult("Email enviado con éxito");
                },
                (error) => {
                    console.log(error.text);
                    setResult("Ocurrió un error. Por favor, inténtalo de nuevo");
                }
            );
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <img src="/img/banner-gastronomic.jpg" className='contact-banner-gastronomic' alt="Pizza Background" />
            <div className='contact-contain-gastronomic'>
                <div className='contact-title-gastronomic'>Contacto</div>
                <hr className='hr-title' />
            </div>
            <div className='contact-container-gastronomic'>
                <div className="restaurant-info ">
                    <h2>La Bella Pizza Italiana</h2>
                    <p>Dirección: 123 Calle Ficticia, Ciudad, País</p>
                    <p>Teléfono: +1 234 567 890</p>
                    <p>Email: contacto@labellapizzaitaliana.com</p>
                    <p>Horario: Lunes a Viernes - 12:00 PM a 11:00 PM</p>
                    <p>Sábado y Domingo - 1:00 PM a 12:00 AM</p>
                </div>
                <div className="contact-form-container">
                    <form onSubmit={handleConfirm} className="contact-form">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit">Enviar</button>
                        {result && <p className="form-result">{result}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

