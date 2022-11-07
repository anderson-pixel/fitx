import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.div`
height: 95vh;
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

      <div className="credit">
      <h3 style={{ fontSize: '2rem',
        textAlign: 'center',
        padding:'1rem',
        color:'white',
        lineHeight: '1.5',
        }}
        >Created by <span><a href='https://github.com/anderson-pixel'>Anderson Pereira</a></span></h3>
      </div>

    <div className="box-container">

      <div className="box">
        <h3>links</h3>
        <a className="links" href="#home">home</a>
          <a className="links" href="#about">about</a>
          <a className="links" href="#features">features</a>
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
       <p> <i>
       <FontAwesomeIcon icon={faPhone} size="1x"/> </i>+123-456-7890</p>
       <p> <i>
       <FontAwesomeIcon icon={faPhone} size="1x"/> </i>+123-456-7890</p>
       <p> <i>
       <FontAwesomeIcon icon={faPhone} size="1x"/> </i>+123-456-7890</p>
       <p> <i>
       <FontAwesomeIcon icon={faPhone} size="1x"/> </i>+123-456-7890</p>
      </div>   
    </div>
    </FooterContainer>
  )
}

export default Footer;