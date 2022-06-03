import React from "react";
import img from "../images/image2.jpeg";
const About = () => {
    return <>
          <h1>About</h1>
          <h2>Brothers and Sisters</h2>
          <div className="about-container">
              <h4>In this picture you can see my brother and my younger sister on a vacation to Maldives and Sri Lanka
              Having parents from two different continents surely spiced our everyday routines</h4>
              <img src={require('../images/image2.jpeg')} alt="brotherandsisters" className="abt-image" />
          </div>
          <h2>Baby sister</h2>
          <div className="about-container">
              <img src={require('../images/image3.jpeg')} alt="babysisters" className="abt-image" />
              <h4 className="p-abt">This is my baby sister. Her and I do a lot of music together. She's 6 years younger than I, but we still are so alike.
              Growing up we used to sing harmonies to almost every Disney movie theme song.
              Music keeps, in more ways than one, us all together.</h4>
          </div>
      </>
  };
  
  export default About;