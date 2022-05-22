import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavMainCont = styled.div`

.navbar {
    background: transparent;
    height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
top: 0;
z-index: 10;
width: 100%;
position: fixed;
}

.navbar.active {
    background: #282828;
}
`



export const Nav = styled.nav`



@media screen and (max-width: 960px) {
    transition: all 0.8s ease;
    height: 40px;
}
`;
export const NavbarContainer = styled.li`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width:100%;
padding: 0 0px;
max-width: 1300px;

@media screen and (max-width: 300px) {
    justify-content: start;
}
`

export const NavAcronym = styled.h1`
color: #fff;
position: absolute;
margin: 31px 0px 0px 10px;
font-size: 20px;

span {
    color: red;
}
`

export const NavItem = styled.div`
 height: 80px;
 padding: 0px 0px 0px 5.5rem;
`


export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 35px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
   }
@media screen and (max-width: 400px) {
    font-size: 1.6rem;
    padding: 4.5px 0px 0px 0px;
}
`

export const NavMenu = styled.ul`
display: grid;
grid-template-columns: repeat(20, auto);
grid-gap: 0px;
list-style: none;
text-align: center;
width: 70vw;
margin: 0px 0px 0px 0px;
justify-content: start;

@media screen and (max-width: 900px) {
    display: none;
}

`
export const NavItCont = styled(motion.div)`
color: #fff;
display: flex;
font-size: 15px;
align-items: center;
text-decoration: none;
padding: 0px 0px 0px 0px;
position: absolute;
height: 100%;
cursor: pointer;
margin: 17px 0px 0px 0px;

.active {
   margin: 13px 0px 0px 0px;
   padding-bottom: 10px;
   border-bottom: 2.5px solid red;
   position: relative;
   color: red;
}
`;

export const NavIconContainer = styled.div`
@media screen and (max-width: 1310px) {
     margin: 0px 0px 0px -300%;
}
`