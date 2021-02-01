import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class RecipeCard extends Component {

    toRecipePage = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/recipe', 
            state: { recipe: this.props.recipe }});

    }

    render() {
        const { recipe, recipeKey, image } = this.props;
        return (
            <div className="card-container" key={recipeKey} onClick={(e) => this.toRecipePage(e)}>
                <div className="photo-container">
                    <Image src={image} />
                </div>
                <div className="title-container">
                    <h4>{recipe.title}</h4>
                </div>
            </div>
        );
    }
}

export default withRouter(RecipeCard);