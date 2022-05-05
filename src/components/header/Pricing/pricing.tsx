import React from 'react'
import styled from 'styled-components'

const PricingContainer = styled.section`
height: 300px;
width: 100%;
color: #fff;
`

function Pricing() {
  return (
    <PricingContainer>

      <div className="information">
        <span>pricing plans</span>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis 
           blanditiis</p>
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
         <p><a href="#" className="btn">all pricing</a></p>
      </div>

      <div className="basic plan">
        <h3>basic plan</h3>
        <div className="price"><span>$</span>30<span>/mo</span></div>
        <div className="list">
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
        </div>
        <a href="#" className="btn">get started</a>
      </div>

      <div className="premium plan">
        <h3>premium plan</h3>
        <div className="price"><span>$</span>60<span>/mo</span></div>
        <div className="list">
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
         <p><i className="fas fa-check"> exercise</i></p>
        </div>
        <a href="#" className="btn">get started</a>
      </div>

    </PricingContainer>
  )
}

export default Pricing;