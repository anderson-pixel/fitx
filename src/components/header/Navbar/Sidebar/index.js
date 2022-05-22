import React from 'react';
import {Link} from 'react-scroll';
import { 
    MobileContainer,
    Icon,
    CloseIcon,
    MobileWrapper,
    MobileMenu,
    MobileLink,
 } from './MobileElements';


const SideBar = ({ isOpen, toggle }) => {

    return (
        <MobileContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileWrapper>
                <MobileMenu>
                <MobileLink> 
                <Link to='home' spy={true} smooth={true} offset={0} duration={500} onClickCapture={toggle}>Home</Link>
                </MobileLink>
                <MobileLink> 
                <Link to='features' spy={true} smooth={true} offset={0} duration={500} onClickCapture={toggle}>Features</Link>
                </MobileLink> 
                <MobileLink> 
                <Link to='about' spy={true} smooth={true} offset={0} duration={500} onClickCapture={toggle}>About</Link>
                <MobileLink> 
                <Link to='pricing' spy={true} smooth={true} offset={0} duration={500} onClickCapture={toggle}>Pricing</Link>
                </MobileLink>
                <MobileLink> 
                <Link to='trainers' spy={true} smooth={true} offset={0} duration={500} onClickCapture={toggle}>Trainers</Link>
                </MobileLink>
                <MobileLink> 
                <Link to='contact' spy={true} smooth={true} offset={0} duration={500} onClickCapture={toggle}>Contact</Link>
                </MobileLink>
                </MobileLink>
                </MobileMenu>
            </MobileWrapper>
        </MobileContainer>
    )
}

export default SideBar;
