import React, { Component } from "react"


class AddRecipe extends Component {

    handleAddRecipe = (e) => {
        e.preventDefault();
        this.props.history.push('/profile');

        const data = new FormData(e.target);
        console.log("{title: " + data.get('recipe-title') + " ingredients: " + data.get('recipe-ingredients') + " instructions: " + data.get('recipe-instructions') + "}"); //test print

        fetch('http://localhost:8081/recipeapi/recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: data.get('recipe-title'),
            ingredients: data.get('recipe-ingredients'),
            instructions: data.get('recipe-instructions'),
          })
        })
        .then(response => {
            console.log(response); //delete later
            console.log(response.body); //delete later
            console.log(response.status); //delete later
            if(response.status === 201)
                alert("Recipe created successfully");
            else
                alert("Recipe wasn't created, db error");
        });
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

                    <div className="form-group">
                        <div className="add-recipe-title"> Ingredients </div>
                        <input type="text" name="recipe-ingredients" className="form-control" placeholder="Place ingredients here" required />
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