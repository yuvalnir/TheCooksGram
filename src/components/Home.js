import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

import RecipeCard from "./RecipeCard";
import babka from "../temp-images/babka.jpg";
import SmoresPie from "../temp-images/Smores Pie.jpg";
import lemonPie from "../temp-images/lemonpei.jpg";

class Home extends Component {

  constructor() {
    super()
    this.state = {
      recipes: [],
    }
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    fetch(`http://localhost:8081/recipeapi/userrecipes/${localStorage.getItem('userEmail')}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then(jsonObj => {
            this.setState({ recipes: jsonObj.data });
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
            return <RecipeCard recipe={recipe} key={recipe._id} />
          })}
        </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickRight('myFavoriteRecipes')}>R</Button> </div>
        {/* </div> */}
        {/* <div className="new-recipies"> */}
        <div className="title-div"> <h6>New recipes</h6> </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickLeft('new-recipies')}>L</Button> </div>
        <div className="card-slide-container" id='new-recipies'>
          {this.state.recipes.map((recipe, index) => {
            return <RecipeCard recipe={recipe} key={recipe._id} />
          })}
        </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickRight('new-recipies')}>R</Button> </div>
      </div>
      // </div>
    );
  }
}

export default Home;