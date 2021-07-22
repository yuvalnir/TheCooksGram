import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';

class RecipeCard extends Component {

    toRecipePage = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/recipe', 
            state: { 
                recipe: this.props.recipe,
                images: this.props.images
             }});
    }

    render() {
        const { recipe, recipeKey, images } = this.props;
        return (
            <div className="card-container" key={recipeKey} onClick={(e) => this.toRecipePage(e)}>
                <div className="photo-container">
                    <Image src={images ? images[0] : '' } />
                </div>
                <div className="title-container">
                    <h4>{recipe.title}</h4>
                </div>
            </div>
        );
    }
}

export default withRouter(RecipeCard);