import React from 'react'
import styled from 'styled-components'
import Featureconfig from './featureconfig'
import fimage1 from '../../../images';
import fimage2 from '../../../images';
import fimage3 from '../../../images';
import fimage4 from '../../../images';

const FeaturesContainer = styled.section`

`

const Feature = () => {
  return (
    <FeaturesContainer id="features">
      <h1>Features</h1>
      <div className="a-container">
      <Featureconfig />
      </div>
    </FeaturesContainer>
  )
}

export default Feature;