import React, {useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LoginNavBar from "./components/LoginNavBar";
import MainNavBar from './components/MainNavBar';

function App() {


  const [isLogedin, setIsLogedin] = useState("false");


  return (
      <div className="App">
        {isLogedin ? <MainNavBar /> : <LoginNavBar setIsLogedin={this.setIsLogedin} />}
      </div>
  );
}

export default App;