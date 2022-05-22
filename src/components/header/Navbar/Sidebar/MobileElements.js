import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const MobileContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0b090a;
display: grid;
align-items: center;
top: 0px;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled (FaTimes)`
 color: #fff;   
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const MobileWrapper = styled.div`
color: #fff;
`

export const MobileMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 85px);
text-align: center;
`

export const MobileLink = styled(LinkS)`
display: grid; 
grid-template-columns: auto;
grid-template-rows: 5em 5em 5em 5em;
font-size: 20px;
`