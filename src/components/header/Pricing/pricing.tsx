import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';

const PricingContainer = styled.section`
height: auto;
width: 100%;
color: ${props => props.theme.colors.text};
background: #d11a2a;

@media (max-width: 835px) {
  height: 1000px;
}
@media (max-width: 558px) {
  height: 1430px;
}

.link-btn {
  margin-top: 1rem;
   display: inline-block;
   padding:1rem 3rem;
   background: white;
   color: red;
   border: 1px solid red;
   cursor: pointer;
   border-radius: .5rem;
   font-size: 1.8rem;
   text-transform: capitalize;
   transition: all 0.2s ease-in-out;
   &:hover{
      background: red;
      color: white;
   }
}
`


function Pricing() {
  return (
    <PricingContainer className="pricing" id='pricing'>
      <div className="heading">
        <span className="aboutSpa">choose your plan</span>
        <h3>Find The Best Option For You</h3>
      </div>

      <div className="box-container container">
        <div className="box">
          <h3>basic plan</h3>
          <div className="price"><span>$</span>30<span>mo</span></div>
          <a href='!' className="link-btn">buy this plan</a>
          <div className="list">
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> personal training </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> classes per week </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> access to gym </p>
            <p> <i><FontAwesomeIcon icon={faTimes} size="1x"/></i> protein powder </p>
            <p> <i><FontAwesomeIcon icon={faTimes} size="1x"/></i> membership </p>
          </div>
        </div>

        <div className="box">
          <h3>premium plan</h3>
          <div className="price"><span>$</span>55<span>mo</span></div>
          <h2 className="h2-pop"><span>Most Popular</span></h2>
          <a href='!' className="link-btn">buy this plan</a>
          <div className="list">
          <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> personal training </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> classes per week </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> access to gym </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> protein powder </p>
            <p> <i><FontAwesomeIcon icon={faTimes} size="1x"/></i> membership </p>
          </div>
        </div>

        <div className="box">
          <h3>ultimate plan</h3>
          <div className="price"><span>$</span>80<span>mo</span></div>
          <a href='!' className="link-btn">buy this plan</a>
          <div className="list">
          <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> personal training </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> classes per week </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> access to gym </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> protein powder </p>
            <p> <i><FontAwesomeIcon icon={faCheck} size="1x"/></i> membership </p>
          </div>
        </div>


      </div>
    </PricingContainer>
  )
}

export default Pricing;