import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const querySnapshot = await getDocs(collection(db, 'images'));
            const imagesArray = querySnapshot.docs.map(doc => doc.data().imageUrl);
            setImages(imagesArray);
        };

        fetchImages();
    }, []);

    return (
        <div className="gallery-grid">
            {images.map((url, index) => (
                <div key={index} className="gallery-item">
                    <img
                        src={url}
                        alt={`Imagen ${index + 1}`}
                        className="gallery-image"
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;