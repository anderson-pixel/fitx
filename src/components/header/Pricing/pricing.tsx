import React from 'react'
import styled from 'styled-components'

const PricingContainer = styled.section`
height: 650px;
width: 100%;
color: ${props => props.theme.colors.text};

.information {
    span {
      font-size: 2rem;
      color: red;
    }
    h3 {
      font-size: 4rem;
      padding-top: .5rem;
      color: ${props => props.theme.colors.text};
    }
    p {
      line-height: 2;
      padding: 1rem 0;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.text};
    }
    i {
      padding-right: 1rem;
      color: red;
    }
  }

  .plan {
    text-align: center;
    padding: 2rem;

    &.basic {
     background: linear-gradient(130deg, #484848 23%, transparent 95% );
    }
    &.premium {
     background: linear-gradient(130deg, #110f0f 23%, transparent 95% );
    }

    h3 {
      font-size: 2.5rem;
      margin: 1rem 0;
      color: white;
    }

    .price {
      font-size: 5rem;
      font-weight: bolder;
      color: red;

      span {
        color: white;
        font-size: 2rem;
      }
    }
    .list{
      padding: 1rem 0;

      p {
      line-height: 2;
      padding: 1rem 0;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.text};
    }
    i {
      padding-right: 1rem;
      color: red;
    }
    }
}

.btn {
  margin-top: 1rem;
  display: inline-block;
  padding:1rem 2.8rem;
  padding-right: 3rem;
  background: linear-gradient(130deg, red, transparent 90%);
  cursor: pointer;
  font-size: 1.7rem;
  color: white;
  &:hover {
  transform: scale(1.1);
}
}
`


function Pricing() {
  return (
    <PricingContainer className="pricing">

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