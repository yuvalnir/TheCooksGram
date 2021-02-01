import React, { Component } from "react"


class RecipePage extends Component {

    render() {
        const recipe  = this.props.location.state.recipe;
        return (
            <div className="recipe-page">
                <div className="recipe-title">
                <div className="add-recipe-title"> Title </div>
                    <div className="text-container">{recipe.title}</div>
                </div>
                <div className="recipe-author">
                <div className="add-recipe-title"> Author </div>
                <div className="text-container"> test author</div>
                </div>
                <div className="recipe-ingredients">
                <div className="add-recipe-title"> Ingredients </div>
                <div className="text-container">{recipe.ingredients}</div>
                </div>
                <div className="recipe-instructions">
                <div className="add-recipe-title"> Instructions </div>
                <div className="text-container">{recipe.instructions}</div>
                </div>
            </div>
        );
    }
}

export default RecipePage;