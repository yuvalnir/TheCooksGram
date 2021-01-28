import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import RecipePage from "./RecipePage";

class RecipeCard extends Component {
    render() {
        const { recipeName, recipeKey, image } = this.props;
        return (
            <div className="card-container" key={recipeKey} onClick={RecipePage}>
                <div className="photo-container">
                    <Image src={image} />
                </div>
                <div className="title-container">
                    <h4>{recipeName}</h4>
                </div>
            </div>
        );
    }
}

export default RecipeCard;