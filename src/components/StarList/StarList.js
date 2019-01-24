import React from 'react';
import Aux from '../../hoc/Aux';
import Star from './Star/Star';

const StarList = (props) => {
    return(
        <Aux>
            {props.stars.map(star => {
                return(<Star
                    name={star.name}
                    height={star.height}
                    mass={star.mass}
                    birth_year={star.birth_year}
                    />)
            })}
        </Aux>
    )
}

export default StarList;