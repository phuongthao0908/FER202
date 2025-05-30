import React from 'react';
import CardComponent from './CardComponent';
import './App.css';

const App = () => {
    const carImage = '/images/car.png';
    const cardsData = [
        {
            imageSrc: carImage,
            description: 'Some text inside the first card',
            borderColor: '#007bff',
        },
        {
            imageSrc: carImage,
            description: 'Some text inside the first card',
            borderColor: '#ffc107',
        },
        {
            imageSrc: carImage,
            description: 'Some text inside the first card',
            borderColor: '#dc3545',
        },
    ];

    return (
        <div className="container my-5">
            <h1 className="mb-2 text-center">Exercise 7: Demo about Cards Column</h1>
            <h3 className="mb-2">Cards Columns</h3>
            <div className="row">
                {cardsData.map((card, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <CardComponent
                            imageSrc={card.imageSrc}
                            description={card.description}
                            borderColor={card.borderColor}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
