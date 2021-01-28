import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import RecipeCard from "./RecipeCard";
import ProfilePic from "../temp-images/ProfilePic.jpg";


class Profile extends Component {

  constructor(props) {
    super()
    this.state = {
      recipes: [],
      isUpdateNeeded: false,
    }
  }

  componentDidMount() {
    this.fetchRecipes();
  }

  componentDidUpdate(){
    if(this.state.isUpdateNeeded === true)
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    fetch(`http://localhost:8081/recipeapi/userrecipes/${localStorage.getItem('userEmail')}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (response.status === 200)
          response.json().then(jsonObj => {
            this.setState({ recipes: jsonObj.data });
            this.setState({ isUpdateNeeded: false });
          });
        else
          alert("Recipe wasn't created, db error");
      });
  }

  // const isFocused = useIsFocused();

  render() {
    return (
      <div className="profile">
        <div className="profile-summary-grid-container">
          <div className="profile-photo-container">
            <Image src={ProfilePic} roundedCircle />
          </div>
          <div className="profile-summary">
            <h4>{localStorage.getItem('userFirstName')} {localStorage.getItem('userLastName')}</h4>
            <h5>Profile Description</h5>
          </div>
          <div className="profile-settings">
            <Button variant="light">Settings</Button>
          </div>
        </div>
        <div className="profile-recipes-grid-container">
          {this.state.recipes.map((recipe, index) => {
            return <RecipeCard recipeName={recipe.title} key={recipe._id} />
          })}
        </div>
      </div>
    );
  }
}

export default Profile;