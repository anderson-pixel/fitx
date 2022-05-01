import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const HeaderContainer = styled.header`
position: fixed;
top: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 9%;
background: black;

@media (max-width: 991px) {
  padding: 0 2rem;
}

@media (max-width: 768px) {
  padding: 2rem;
}

@media (max-width: 768px) {
  .navbar {
    position: absolute;
    top: 99%; 
    left: 0; 
    right: 0;
    background: #111;
  }
}

.logo {
  font-weight: bolder;
  color: #fff;
  font-size: 3rem;

  span {
    color: red;
  }
}

.navbar a{
  display: inline-block;
  padding: 1.5rem 2rem;
  font-size: 1.7rem;
  color: #fff;

  &:hover {
    background: red;
  }

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
  }
}

#menu-btn {
  font-size: 3rem;
  color: #fff;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
  display: inline-block;
}
}
`

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
        <a href="#logo" className="logo">Fit<span>X</span></a>

        <div  className="fas fa-bars">
        <FontAwesomeIcon id="menu-btn" style={{color: 'white'}} icon={faBars}></FontAwesomeIcon>
        </div>
        
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#fetures">features</a>
          <a href="#pricing">pricing</a>
          <a href="#trainers">trainers</a>
          <a href="#blogs">blogs</a>
        </nav>
    </HeaderContainer>
  );
};