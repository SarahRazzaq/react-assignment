
import React from "react";
import img from "../images/image1.jpeg";

const Home = () => {
    return <>
      <h1>Home</h1>
      <h2>A little about me</h2>
      <div className="home-container">
      <h4>My name is Sarah and I'm 37 years old. I live with my family in a small place called Veberöd.There's not a lot going on here but we do have a lot of music project. I sing in a barbershop chorus and and perfom as a solo artist on different events.</h4>
      <img src={require('../images/image1.jpeg')} alt="girl_with_umberella"  />
      <h4> I come from a family where music has always been an important part of who we are. My closest family, children and sibblings, have, in one way or another, a little music in our every day lives. We are the ones who spontaneousely can burst in to harmonies or a musical performance. Music truly runs through ou veins.</h4>
      </div>
    </>;
  };
  
  export default Home;