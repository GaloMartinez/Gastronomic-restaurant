import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Catalog from './Components/Catalog/Catalog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    );
}

export default App;
