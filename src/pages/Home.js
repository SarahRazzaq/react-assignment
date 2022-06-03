
import React from "react";
import img from "../images/image1.jpeg";

const Home = () => {
    return <>
      <h1>Home</h1>
      <h2>A little about me</h2>
      <div className="home-container">
      <p>Jag heter Sarah och är 37 år gammal. Jag bor i Veberöd.
      I mitt liv finns väldigt mycket musik. Jag sjunger själv i kör eller på olika tillställningar</p>
      <img src={require('../images/image1.jpeg')} alt="girl_with_umberella"  />
      <p>Min familj, både barn och syskon, håller också, på något sätt, på med musik.
      Man kan enkelt säga att musik flyter i våra ådror.</p>
      </div>
    </>;
  };
  
  export default Home;