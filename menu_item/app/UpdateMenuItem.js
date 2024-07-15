import React from 'react'

const UpdateMenuItem = ({props}) => {
    return (
        <div>
            <div>
                <h3>Menu Name:{props.name}</h3>
                <p>Price: {props.price}</p>
                <p>Description:{props.description}</p>
            </div>

        </div>
    )
}

export default UpdateMenuItem