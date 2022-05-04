import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Container} from './Styles';
import Switch from 'react-switch';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

  const {colors, title } = useContext(ThemeContext);

  return (
    <Container>

        <a href="#logo" className="logo">Fit<span>X</span></a>

        <div id="menu-btn" className="fas fa-bars"></div>
        
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#fetures">features</a>
          <a href="#pricing">pricing</a>
          <a href="#trainers">trainers</a>
          <a href="#contact">contact</a>
        </nav>

        <Switch 
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.40, colors.primary)}
        onColor={colors.secundary}
        />

        <div  className="fas fa-bars">
        <FontAwesomeIcon id="menu-btn" style={{color: 'white'}} icon={faBars}></FontAwesomeIcon>
        </div>
    </Container>
  );
};

export default Header;