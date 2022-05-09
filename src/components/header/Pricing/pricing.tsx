import React from 'react'
import styled from 'styled-components'

const PricingContainer = styled.section`
height: 650px;
width: 100%;
color: ${props => props.theme.colors.text};
`


function Pricing() {
  return (
    <PricingContainer className="pricing" id='pricing'>
      <div className="heading">
        <span>choose a plan</span>
        <h3>something</h3>
      </div>

      <div className="box-container container">
        <div className="box">
          <h3>basic plan</h3>
          <div className="price"><span>$</span>60<span>mo</span></div>
          <a href='' className="link-btn">choose your plan</a>
          <div className="list">
            <p> <i className="fas fa-check"></i> personal training </p>
            <p> <i className="fas fa-check"></i> classes per week </p>
            <p> <i className="fas fa-check"></i> access to gym </p>
            <p> <i className="fas fa-check"></i> protein powder </p>
            <p> <i className="fas fa-check"></i> membership </p>
          </div>
        </div>

        <div className="box">
          <h3>premium plan</h3>
          <div className="price"><span>$</span>30<span>mo</span></div>
          <a href='' className="link-btn">choose your plan</a>
          <div className="list">
            <p> <i className="fas fa-check"></i> personal training </p>
            <p> <i className="fas fa-check"></i> classes per week </p>
            <p> <i className="fas fa-check"></i> access to gym </p>
            <p> <i className="fas fa-check"></i> protein powder </p>
            <p> <i className="fas fa-times"></i> membership </p>
          </div>
        </div>

        <div className="box">
          <h3>ultimate plan</h3>
          <div className="price"><span>$</span>30<span>mo</span></div>
          <a href='' className="link-btn">choose your plan</a>
          <div className="list">
            <p> <i className="fas fa-check"></i> personal training </p>
            <p> <i className="fas fa-check"></i> classes per week </p>
            <p> <i className="fas fa-check"></i> access to gym </p>
            <p> <i className="fas fa-check"></i> protein powder </p>
            <p> <i className="fas fa-check"></i> membership </p>
          </div>
        </div>


      </div>
    </PricingContainer>
  )
}

export default Pricing;