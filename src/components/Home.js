import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

import RecipeCard from "./RecipeCard";
import babka from "../temp-images/babka.jpg";
import SmoresPie from "../temp-images/Smores Pie.jpg";
import lemonPie from "../temp-images/lemonpei.jpg";

class Home extends Component {

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
          {/* <RecipeCard recipeName='Smores Pie' image={SmoresPie} />
          <RecipeCard recipeName='Babka' image={babka} />
          <RecipeCard recipeName='פאי לימון' image={lemonPie} /> */}
          {/* <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' /> */}
        </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickRight('myFavoriteRecipes')}>R</Button> </div>
        {/* </div> */}
        {/* <div className="new-recipies"> */}
        <div className="title-div"> <h6>New recipes</h6> </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickLeft('new-recipies')}>L</Button> </div>
        <div className="card-slide-container" id='new-recipies'>
          {/* <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' /> */}
        </div>
        <div className="button-div"> <Button variant="light" onClick={() => this.clickRight('new-recipies')}>R</Button> </div>
      </div>
      // </div>
    );
  }
}

export default Home;