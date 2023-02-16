import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const divStyle = {
    color:"blue"
  }
  return(
    <div id="home">
      <h1 style={divStyle}>{name} is a Web Developer from {city}</h1>
    </div>
  )
}

export default Home;
