import React, { Component } from "react"
import Button from 'react-bootstrap/Button';

import Babka from "../temp-images/babka.jpg";


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
                    <h1>{recipe.title}</h1>
                </div>

                <div className="recipe-author">
                    <div className="recipe-page-titles"> Author </div>
                    <div className="text-container">test author</div>
                </div>

                <div className="recipe-ingredients">
                    <div className="recipe-page-titles"> Ingredients </div>
                    <ul className="ingredient-container">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient[0]} {ingredient[1]} {ingredient[2]}</li>
                        ))}
                    </ul>
                </div>

                <div className="recipe-instructions">
                    <div className="recipe-page-titles"> Instructions </div>
                    <div className="text-container">{recipe.instructions}</div>
                </div>

                <div className="recipe-photos">
                    <div className="recipe-page-titles"> Photos </div>
                    <div className="recipe-page-photo-container">
                        <Button variant="light" >{'<'}</Button>
                        <img src={Babka} />
                        <Button variant="light" >{'>'}</Button>
                    </div>
                    <div className="recipe-page-photos-preview">
                        <img src={Babka} />
                        <img src={Babka} />
                        <img src={Babka} />
                        <img src={Babka} />
                        <img src={Babka} />
                        <img src={Babka} />
                        <img src={Babka} />
                        <img src={Babka} />
                    </div>
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