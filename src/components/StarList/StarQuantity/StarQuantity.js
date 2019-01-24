import React from 'react';
import Aux from '../../../hoc/Aux'

const StarQuantity = (props) => {
    return(
        <Aux>
            <input onChange={props.changeNumber}></input>
        </Aux>
    ) 
}

export default StarQuantity;