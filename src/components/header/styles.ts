import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 9%;
background: ${props => props.theme.colors.primary};
color: #fff;
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
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
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
    &.fa-times{
      transform: rotate(90deg);
    }
  }
}
`