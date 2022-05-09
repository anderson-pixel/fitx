import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
height: 500px;
width: 100%;
background: black;
justify-content: center;
align-items: center;
display: flex;
display: grid;
`

function Footer() {
  return (
     <FooterContainer className="footercont">
    <div className="box-container">

      <div className="box">
        <h3>links</h3>
        <a className="links" href="#home">home</a>
          <a className="links" href="#fetures">features</a>
          <a className="links" href="#pricing">pricing</a>
          <a className="links" href="#trainers">trainers</a>
          <a className="links" href="#contact">contact</a>
      </div>

      <div className="box">
        <h3>Opening Hours</h3>
        <p> monday : <i> 7:00am - 10:30pm </i> </p>
        <p> tuesday : <i> 7:00am - 10:30pm </i> </p>
        <p> wednesday : <i> 7:00am - 10:30pm </i> </p>
        <p> fryday : <i> 7:00am - 10:30pm </i> </p>
        <p> saturday : <i> 7:00am - 10:30pm </i> </p>
        <p> sunday : <i> 7:00am - 10:30pm </i> </p>
      </div>

      <div className="box">
       <h3>Contact</h3>
       <p> <i className="fas fa-phone"></i>+123-456-7890</p>
       <p> <i className="fas fa-phone"></i>+123-456-7890 </p>
       <p> <i className="fas fa-envelope"></i>@kdkmefmfmesmf</p>
       <p> <i className="fas fa-map"></i>yergh feksnfksemnfk</p>
       <div className="share">
          <a className="fab fa-facebook-f" href="#"></a>
          <a className="fab fa-twitter" href="#"></a>
          <a className="fab fa-linkedin" href="#"></a>
          <a className="fab fa-pinterest" href="#"></a>
       </div>
      </div>   

    </div>
    </FooterContainer>
  )
}

<div className="credit">created by <span>abudab</span> | all rights reserved</div>

export default Footer;