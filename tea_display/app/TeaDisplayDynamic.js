
import React from 'react';
const TeaDisplayDynamic = ({props}) => {
    return (
        <>
            <h2>Name:{props.name}</h2>
            <p>Origin:{props.origin}</p>
            <p>Description:{props.description}</p>
        </>
    )
}
export default TeaDisplayDynamic;
