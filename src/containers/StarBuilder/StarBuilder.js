import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import StarList from '../../components/StarList/StarList';
import StarQuantity from '../../components/StarList/StarQuantity/StarQuantity';

class StarBuilder extends Component {
    constructor() {
        super()
        this.state = {
            starChars: [],
            number: 0
        }
    }
    

     getNumberOfStars = async (event) => {
        const numberIteration = event.target.value;
        const data = [];
        for(let i = 1; i<=numberIteration; i++){
            const res = await fetch(`https://swapi.co/api/people/${i}/?format=json`);
            const dataItems = await res.json();
            data.push(dataItems);
        }   
        await this.setState({starChars: data})
    }

    render(){
        return(
            <Aux>
                <StarQuantity changeNumber={this.getNumberOfStars}/>
                <StarList stars={this.state.starChars}/>
            </Aux>
        )
    }
}

export default StarBuilder;
