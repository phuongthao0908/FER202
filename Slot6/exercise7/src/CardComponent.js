import React from 'react';

const CardComponent = ({ imageSrc, description, borderColor }) => {
    return (
        <div
            className="card"
            style={{
                border: `10px solid ${borderColor}`,
                borderRadius: '0px',
                padding: '0px',
            }}
        >
            <img
                src={imageSrc}
                className="card-img-top"
                alt="Car"
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <div
                style={{
                    backgroundColor: borderColor,
                    color: 'white',
                    textAlign: 'center',
                    padding: '8px 0',
                    margin: '0',
                }}
            >
                <p style={{ margin: 0, fontWeight: 'bold' }}>{description}</p>
            </div>
        </div>
    );
};

export default CardComponent;
