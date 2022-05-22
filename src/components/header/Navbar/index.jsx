import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa'; 
import {Link} from 'react-scroll';

import { 
    NavMainCont,
    Nav,
    NavbarContainer,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItCont,
    NavAcronym,
 }from './NavElements';

const Navbar = ({ toggle }) => {

    const [navbar, setNavbar] = useState(false)
    useEffect(() => {
    }, []);

    const changeBackground = () => {
       if(window.scrollY >= 80) {
           setNavbar(true)
       } else {
           setNavbar(false);
       }
    };

    window.addEventListener('scroll', changeBackground);


    return (
        <NavMainCont>
        <motion.div>
          <Nav className={navbar ? 'navbar active' : 'navbar'}>
              <NavbarContainer>
                  <NavAcronym>fit<span>X</span></NavAcronym>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu id='ul'>
                  <NavItem>
                  <NavItCont>
                  <Link tagName="li" to='home' spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                  </NavItCont>
                      </NavItem>
                      <NavItem>
                           <NavItCont>
                           <Link tagName="li" to='features' spy={true} smooth={true} offset={0} duration={500}>Features</Link>
                          </NavItCont>
                      </NavItem>
                       <NavItem>
                           <NavItCont>
                           <Link tagName="li" to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link>
                          </NavItCont>
                      </NavItem>
                      <NavItem>
                          <NavItCont>
                          <Link tagName="li" to='pricing' spy={true} smooth={true} offset={0} duration={500}>Pricing</Link>
                          </NavItCont>
                      </NavItem>
                      <NavItem>
                          <NavItCont>
                          <Link tagName="li" to='trainers' spy={true} smooth={true} offset={0} duration={500}>Trainers</Link>
                          </NavItCont>
                      </NavItem>
                      <NavItem>
                          <NavItCont>
                          <Link tagName="li" to='contact' spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
                          </NavItCont>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
        </Nav>  
        </motion.div>
        </NavMainCont>
    );
};
export default Navbar;