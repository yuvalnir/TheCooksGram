import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import RecipeCard from "./RecipeCard";
import ProfilePic from "../ProfilePic.jpg";


class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-summary-grid-container">
          <div className="profile-photo-container">
            <Image src={ProfilePic} roundedCircle />
          </div>
          <div className="profile-summary">
            <h4>Profile Name</h4>
            <h5>Profile Description</h5>
          </div>
          <div className="profile-settings">
            <Button variant="light">Settings</Button>
          </div>
        </div>
        <div className="profile-recipes-grid-container">
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
          <RecipeCard recipeName='Recipe' />
        </div>
      </div>
    );
  }
}

export default Profile;