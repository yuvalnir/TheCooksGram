import React, { Component } from "react"


class RecipePage extends Component {

    deleteRecipe = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8081/recipeapi/recipe/${this.props.location.state.recipe._id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.status === 200)
                    this.props.history.goBack();
            })
            .catch(err => { console.log(err) })
    }

    handleEdit = (e) => {
        e.preventDefault();
    }

    render() {
        const recipe = this.props.location.state.recipe;
        return (
            <div className="recipe-page">

                <div className="recipe-title">
                    <div className="add-recipe-title"> Title </div>
                    <div className="text-container">{recipe.title}</div>
                </div>

                <div className="recipe-author">
                    <div className="add-recipe-title"> Author </div>
                    <div className="text-container">test author</div>
                </div>

                <div className="recipe-ingredients">
                    <div className="add-recipe-title"> Ingredients </div>
                    <ul className="ingredient-container">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient[0]} {ingredient[1]} {ingredient[2]}</li>
                        ))}
                    </ul>
                </div>

                <div className="recipe-instructions">
                    <div className="add-recipe-title"> Instructions </div>
                    <div className="text-container">{recipe.instructions}</div>
                </div>

                <div className="edit-delete-btn">
                    <button className="btn btn-light size-btn" onClick={this.deleteRecipe.bind(this)}>Delete</button>
                    <button className="btn btn-light size-btn">Edit</button>
                </div>

            </div>
        );
    }
}

export default RecipePage;