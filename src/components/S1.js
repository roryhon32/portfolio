import React from "react";
import First from "../assets/img/Intro.png";
import "./S1.css";
import { TypeAnimation } from 'react-type-animation';
import Container from 'react-bootstrap/Container';
import cv  from "../assets/Currículo_LUIZASSUNCAO.pdf"
import { AiOutlineDownload } from "react-icons/ai";
function S1() {
  
  return (<div className="main-content" id="home">
  <Container>
    <div className="main-content container">
      <div className="text">
        <p>HI My NAME IS LUIZ GABRIEL.</p>
          
<TypeAnimation
  // Same String at the start will only be typed once, initially
  sequence={[
  ' Im a Student',
  1000,
  ' Im a fullStack Student',
  1000,
  ' Welcome to my Portifolio',
  1000
  
  
  ]}
  speed={50} // Custom Speed from 1-99 - Default Speed: 40
  style={{ fontSize: '1em' }}
  wrapper="p" // Animation will be rendered as a <span>
  repeat={Infinity} // Repeat this Animation Sequence infinitely
/>
<p>Eletrical/Eletronic Enginering studend,who loves coding.</p>
<p>Looking for an oportunity to learn more and grow up with the company.</p>
<a href={cv} target="_blank"rel="noreferrer"><button className="button">DOWLOAD CV <AiOutlineDownload/></button></a>
      </div>
      <img src={First} className="FirstImg" alt="foTO" />
    </div>
    </Container>
    </div>
  );
}

export default S1;
