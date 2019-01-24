import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import StarList from '../../components/StarList/StarList';
import StarQuantity from '../../components/StarList/StarQuantity/StarQuantity';

class StarBuilder extends Component {
    constructor() {
        super()
        this.state = {
            starChars: []
        }
    }

    componentDidMount() {

    }

    getNumberOfStars = (event) => {
        const iterationLenght = Number(event.target.value);
        const starChars = [];
        const getData = async () => {
            for(let i = 1; i< iterationLenght; i++){
                const data = await fetch(`https://swapi.co/api/people/${i}/`);
                const dataParsed = await data.json();
                starChars.push(dataParsed);
            }
        }    
        console.log(this.state,getData());    
        // this.setState({starChars: getData()});
        
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
