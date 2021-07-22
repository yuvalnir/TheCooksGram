import React, { Component } from "react"
import Button from 'react-bootstrap/Button';

class RecipePage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            previewIndex: 0,
            numOfImages: this.props.location.state.images.length
        };
    }

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

    clickLeft = (containerName) => {
        document.getElementById(containerName).scrollLeft -= 350;
        if(this.state.previewIndex > 0)
        this.setState({previewIndex: this.state.previewIndex - 1})
    }
    
    clickRight = (containerName) => {
        document.getElementById(containerName).scrollLeft += 350;
        if(this.state.previewIndex < this.state.numOfImages - 1)
                this.setState({previewIndex: this.state.previewIndex + 1})
    }

    render() {
        const { recipe, images } = this.props.location.state;
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
                        <Button variant="light" onClick={() => this.clickLeft('photoContainer')}>{'<'}</Button>
                        <div className="inner-photo-container" id='photoContainer'>
                        {images ? 
                            images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} key={index} alt=''/>
                                </div>
                            ))
                            : ''
                        }
                        </div>
                        <Button variant="light" onClick={() => this.clickRight('photoContainer')}>{'>'}</Button>
                    </div>
                    <div className="recipe-page-photos-preview">
                        {images ? 
                            images.map((image, index) => (
                                <div key={index}>
                                    <img className={(this.state.previewIndex === index ? 'img-on-select' : '')} src={image} key={index} alt='' />
                                </div>
                            ))
                            : ''
                        }
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