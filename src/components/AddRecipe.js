import React, { Component } from "react"


class AddRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = { ingredients: [''] };
    }

    handleAddRecipe = (e) => {
        e.preventDefault();
        this.props.history.push('/profile')

        const data = new FormData(e.target);
        console.log("{title: " + data.get('recipe-title') + " ingredients: " + data.get('recipe-ingredients') + " instructions: " + data.get('recipe-instructions') + "}"); //test print
        
        //creating the ingredients array that will be passed to the db
        const ingNames = data.getAll("recipe-ingredients-name");
        const ingAmount = data.getAll("recipe-ingredients-amount");
        const ingAmountType = data.getAll("recipe-ingredients-amount-type");
        const ingArr = [];
        for (let index = 0; index < ingNames.length; index++) {
            ingArr[index] = [ingNames[index], ingAmount[index], ingAmountType[index]];
        }

        fetch('http://localhost:8081/recipeapi/recipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail'),
                title: data.get('recipe-title'),
                ingredients: ingArr,
                instructions: data.get('recipe-instructions'),
            })
        })
            .then(response => {
                console.log(response); //delete later
                console.log(response.body); //delete later
                console.log(response.status); //delete later
                if (response.status === 201)
                    console.log("Recipe created successfully");
            })
            .catch(err => { console.log(err) })
    }

    handleDelete = index => e => {
        e.preventDefault()
        const ingredients = this.state.ingredients;
        ingredients.splice(index, 1);
        
        this.setState({ ingredients: ingredients });
        console.log(this.state.ingredients);
    }

    addIngredient = e => {
        e.preventDefault()
        const ingredients = this.state.ingredients.concat([''])
        this.setState({ ingredients: ingredients })
    }

    render() {

        return (
            <div className="add-recipe-page">
                <div className="add-page-title"> <h1>Add Recipe</h1> </div>

                <form className="add-recipe-page-form" onSubmit={this.handleAddRecipe.bind(this)}>

                    <div className="form-group">
                        <div className="add-recipe-title"> Title </div>
                        <input type="text" name="recipe-title" className="form-control" placeholder="Place title here" required />
                    </div>

                    <div className="form-group ingredient-form-group">
                        <div className="add-recipe-title"> Ingredients </div>
                        <div className="ingredient-box">
                            {this.state.ingredients.map((ingredient, index) => (
                                <div className="input-box" key={index}>
                                    <input type="text" name="recipe-ingredients-name" className="form-control" placeholder="Name" required />
                                    <input type="text" name="recipe-ingredients-amount" className="form-control amount" placeholder="Amount" required />
                                    <input type="text" name="recipe-ingredients-amount-type" className="form-control measure" placeholder="Unit type" />
                                    <button className="btn btn-light btn-block" onClick={this.handleDelete(index).bind(this)}>X</button>
                                </div>
                            ))}
                        </div>
                        
                    </div>

                    <div className="form-group add-ingredient-btn">
                            <button className="btn btn-light btn-block" onClick={this.addIngredient.bind(this)}>Add Ingredient</button>
                        </div>


                    <div className="form-group">
                        <div className="add-recipe-title"> Instructions </div>
                        <textarea name="recipe-instructions" rows="8" className="add-recipe-instructions-input form-control " placeholder="Place instructions here" required />
                    </div>


                    <div className="form-group">
                        <div className="add-recipe-title"> Add photos Coming Soon... </div>
                        {/* <button type="button" className="btn btn-light btn-block">+</button> */}
                    </div>


                    <button type="submit" className="btn btn-light btn-block">Add Recipe</button>

                    {/* <div className="add-recipe-title"> Add video (maybe in the future) </div> */}
                </form>
            </div>
        );
    }
}

export default AddRecipe;