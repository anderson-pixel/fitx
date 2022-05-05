import React from 'react'
import styled from 'styled-components'
import Featureconfig from './featureconfig'
import fimage1 from '../../../images/1.svg';
import fimage2 from '../../../images/2.svg';
import fimage3 from '../../../images/3.svg';
import fimage4 from '../../../images/4.svg';

const FeaturesContainer = styled.section`
justify-content: center;
align-items: center;
display: flex;
height: 600px;
width: 100%;
margin-top: 100px;

.fe1 {
  position: absolute; 
  margin-bottom: 500px; 
  letter-spacing: 3px; 
  font-size: 35px;
  
  @media (max-width: 991px) {
    margin-bottom: 1200px;
  }
}

@media (max-width: 991px) {
    height: 1000px;
}

.featureconfigcont {
justify-content: center;
align-items: center;
display: flex;
position: absolute;
}
.a-container {
  display: flex;
  justify-content: center; 
  align-items: center;
  @media (max-width: 991px) {
    display: inline;
  }
}
`

const Feature = () => {
  return (
    <FeaturesContainer id="features">
      <h1 className="fe1">FEATURES</h1>
      <div className="a-container">
      <div className="featureConfigCont">
      <Featureconfig image={fimage1} title="WeightLifting"/>
      </div>
      <div>
      <Featureconfig image={fimage2} title="WeightLifting"/>
      </div>
      <Featureconfig image={fimage3} title="WeightLifting"/>
      <div>
      <Featureconfig image={fimage4} title="WeightLifting"/>
      </div>


      </div>
    </FeaturesContainer>
  )
}

export default Feature;