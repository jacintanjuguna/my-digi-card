import React from 'react';
import Info from "./components/Info";
import image from "./image/jess.jpg"
import  About from "./components/About";
import  Interests from "./components/Interests";
import twitter from "./image/Twitter Icon.png";
import instagram from "./image/Instagram Icon.png";
import github from "./image/GitHub Icon.png";
import  Footer from "./components/Footer";


export default function App() {
  return (
    <main>
      <Info 
      img={image}
      name="Jacinta Njuguna"
      title="Frontend developer"
      email="jacintaanjuguna@gmail.com"
      linkedIn="https://www.linkedin.com/in/jnjuguna/"
      github="https://github.com/jacintanjuguna"
      />
      <About 
      title="About"
      paragraph="I am a Frontend developer with a passion for creating beautiful and functional web applications.I try to keep up with security and best practices, and am always looking for new things to learn."
      />

      <Interests 
      title="Interests"
      paragraph="Fitness enthusiast. Music lover. Reader. Internet fanatic. Entrepreneur. Travel geek.Coffee fanatic."
      />

      <Footer 
      twitter={twitter}
      instagram={instagram}
      github={github}
      /> 
    </main>
  );
}