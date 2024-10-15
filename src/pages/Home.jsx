import React from "react";
import AddisImage from '../images/addis_moon.jpeg'
import AddisArt from "../images/addis_art.jpeg"; 

function Home() {
  return (
    <div className="App">
      <header>
        <h1>microcosm of travels</h1>
        <h2 id="welcome-message">storytelling through photos</h2>
      </header>

      <div className="introduce-button">
        click here for a special message
      </div>

      <div className="container">
        <div className="content" role="main">
          <h1 className="title">addis ababa, ethiopia</h1>
          <img src={AddisImage} alt="Addis Moon" />
        </div>
      </div>

      <img src={AddisArt} alt="Addis Art" />

      <nav>
        go <a href="/about">here</a>
      </nav>

      <footer className="footer">made 2024</footer>
    </div>
  );
}

export default Home;