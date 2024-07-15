import React from 'react'

const MapMenuItems = ({ name, price, description }) => {
    return (
        <div>
            <div className="menu-item">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>Description: {description}</p>
            </div>
        </div>
    )
}

export default MapMenuItems;