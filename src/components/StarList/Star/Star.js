import React from 'react';

const Star = (props) => {
    return (
        <div className="star">
            <h1>{props.name}</h1>
            <h2>{props.height}</h2>
            <h2>{props.mass}</h2>
            <h2>{props.birth_year}</h2>
        </div>
    )
}

export default Star;