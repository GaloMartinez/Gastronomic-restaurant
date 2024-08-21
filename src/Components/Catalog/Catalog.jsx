import React, { useState, useEffect } from 'react';
import db from '../../firebase'; // Importa tu configuración de Firebase
import { collection, getDocs } from 'firebase/firestore';
import './Catalog.css'; // Importa los estilos de la grilla

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const productsArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productsArray);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div className='catalog-contain-gastronomic'>
                <div className='catalog-title-gastronomic'>Catalogo</div>
                <hr className='hr-title' />
            </div>
            <div className="catalog-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <hr className='hr-title-card'/>
                        <p>{product.description}</p>
                        <p className="price">${product.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Catalog;
