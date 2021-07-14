import React, { Component } from "react"


class AddRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            ingredients: [''],
            images: [],
            preview: []
        };
    }

    handleAddRecipe = (e) => {
        e.preventDefault();
        this.props.history.push('/profile')

        const data = new FormData(e.target);
        console.log("{title: " + data.get('recipe-title') + " ingredients: " + data.get('recipe-ingredients') + " instructions: " + data.get('recipe-instructions') + "}"); //test print
        
        //creating the ingredients array to be passed to the db
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

    deleteIngredient = index => e => {
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

    handleFileSelected = e => {
        e.preventDefault()
        const files = e.target.files;
            if (files) {
              this.setState({images: files});
              for (let i = 0; i < e.target.files.length; i++) {
                  if(e.target.files[i].type.substr(0, 5) === "image") {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      this.setState({ preview: [...this.state.preview, reader.result]});
                    };
                    reader.readAsDataURL(e.target.files[i]);
                  }
              }
            } else {
                this.setState({images: []});
            }
    }

    removePhoto = index => e => {
        e.preventDefault()
        const previewImages = this.state.preview;
        previewImages.splice(index, 1);
        
        this.setState({ preview: previewImages });
    }

    render() {

        return (
            <div className="add-recipe-page">
                

                <form className="add-recipe-page-form" onSubmit={this.handleAddRecipe.bind(this)}>
                    <div className="add-page-header"> <h1>Add Recipe</h1> </div>

                    <div className="title-form-group">
                        <div className="add-recipe-title"> Title </div>
                        <input type="text" name="recipe-title" className="title-input form-control" placeholder="Place title here" required />
                    </div>

                    <div className="ingredient-form-group">
                        <div className="add-recipe-title"> Ingredients </div>
                        <div className="ingredient-box">
                            {this.state.ingredients.map((ingredient, index) => (
                                <div className="ingredient-input-box" key={index}>
                                    <input type="text" name="recipe-ingredients-name" className="form-control" placeholder="Name" required />
                                    <input type="text" name="recipe-ingredients-amount" className="form-control amount" placeholder="Amount" required />
                                    <input type="text" name="recipe-ingredients-amount-type" className="form-control measure" placeholder="Unit type" />
                                    <button className="btn btn-light btn-block" onClick={this.deleteIngredient(index).bind(this)}>X</button>
                                </div>
                            ))}
                        </div>

                        <button className="ingredient-btn btn-width btn btn-light btn-block" onClick={this.addIngredient.bind(this)}>Add Ingredient</button>
                    </div>

                    <div className="instructions-form-group">
                        <div className="add-recipe-title"> Instructions </div>
                        <textarea name="recipe-instructions" rows="8" className="add-recipe-instructions-input form-control " placeholder="Place instructions here" required />
                    </div>


                    <div className="photos-form-group">
                        <input 
                            type="file"
                            accept="image/*"
                            multiple="multiple"
                            style={{display: 'none'}}
                            onChange={this.handleFileSelected}
                            ref={fileInput => this.fileInput = fileInput}
                        />
                        <button type="button" onClick={() => this.fileInput.click()} className="btn-width btn btn-light btn-block">Choose photos</button>
                        <div className="photos-container">
                            {this.state.preview ? 
                                this.state.preview.map( (image, index) => (
                                    <div>
                                        <img src={image} key={index} />
                                        <button className="close-btn" onClick={this.removePhoto(index)}>X</button>
                                    </div>
                                ))
                                : ''
                            }
                            
                        </div>
                    </div>


                    <button type="submit" className="btn-width btn-top-margin add-page-footer btn btn-light btn-block">Add Recipe</button>

                    {/* <div className="add-recipe-title"> Add video (maybe in the future) </div> */}
                </form>
            </div>
        );
    }
}

export default AddRecipe;