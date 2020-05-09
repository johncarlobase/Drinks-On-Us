import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {

    state = {
        savedDrinks: [],
    }

    componentDidMount() {
        API.savedDrinks()
            .then(savedDrinks => this.setState({ savedDrinks: savedDrinks }))
            .catch(err => console.error(err));
    }

    handleSave = drink => {

        if (this.state.savedDrinks.map(drink => drink._id).includes(drink._id)) {
            API.deleteDrink(drink._id)
                .then(deletedDrink => this.setState({ savedDrinks: this.state.savedDrinks.filter(drink => drink._id !== deletedDrink._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveDrink(drink)
                .then(savedDrink => this.setState({ savedDrinks: this.state.savedDrinks.concat([savedDrink]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.drinks.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.drinks.map(result => (
                                <div className="card mb-3" key={result._id}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img alt={result.drink} className="img-fluid" src={result.image} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{result.name}</h5>
                                                <p className="card-text">Ingredients: {result.ingredients}</p>
                                                <div>
                                                    <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
                                                    <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                                        {this.state.savedDrinks.map(drink => drink._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;