import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

import RecipeCard from "./RecipeCard";

class Home extends Component {

  constructor() {
    super()
    this.state = {
      recipes: [],
      imagesArr: [],
    }
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    fetch(`http://localhost:8081/recipeapi/userrecipes/${localStorage.getItem('userId')}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then(jsonObj => {
            this.setState({ recipes: jsonObj.data.recipes });
            this.setState({ imagesArr: jsonObj.data.imagesArr });
            console.log(jsonObj.data);
          });
        }
      })
      .catch(err => { console.log(err) })
  }

  clickLeft = (contianerName) => {
    document.getElementById(contianerName).scrollLeft -= 1400;
  }

  clickRight = (contianerName) => {
    document.getElementById(contianerName).scrollLeft += 1400;
  }

  render() {
    return (
      <div className="home grid-container">
        {/* <div className="my-favorite-recipes "> */}
        <div className="title-div"> <h6>My favorite recipes</h6> </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickLeft('myFavoriteRecipes')}>L</Button> </div>
        <div className="card-slide-container" id='myFavoriteRecipes'>
          {this.state.recipes.map((recipe, index) => {
            return <RecipeCard recipe={recipe} images={this.state.imagesArr[index]} key={recipe._id} />
          })}
        </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickRight('myFavoriteRecipes')}>R</Button> </div>
        {/* </div> */}
        {/* <div className="new-recipes"> */}
        <div className="title-div"> <h6>New recipes</h6> </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickLeft('new-recipes')}>L</Button> </div>
        <div className="card-slide-container" id='new-recipes'>
          {this.state.recipes.map((recipe, index) => {
            return <RecipeCard recipe={recipe} image={this.state.imagesArr[index]} key={recipe._id} />
          })}
        </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickRight('new-recipes')}>R</Button> </div>
      </div>
      // </div>
    );
  }
}

export default Home;