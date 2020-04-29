import React from 'react';
import axios from 'axios';

export default class IngredientList extends React.Component {
    state = {
        ingredients: [],
    };

    componentDidMount() {
        axios.get(`https://the-cocktail-db.p.rapidapi.com/list.php?i=list`)
            .then(res => {
                console.log(res);
                this.setState({ingredients: res.data})
            });
    }

    render() {
        return (
            <ul>
                {this.state.ingredients.map(ingredient => <li>{ingredient.drinks.strIngredient1}</li>)}
            </ul>
        )
    }
}