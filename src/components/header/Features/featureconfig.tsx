import React from 'react'
import styled from 'styled-components';

interface props {
  title: string;
  image: string;
  style?: any;
}

const FeatureAbox = styled.div`
.a-box:hover {
  border: 1px solid red;
  border-radius: 5px;
}
.a-b-text {
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
}
`

const Featureconfig: React.FC<props> = (props) => {
  return (
    <FeatureAbox>
    <div style={{display: 'inline-block', width: '270px', height: '270px'}} className="a-box">
        <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}} className="a-b-img">
            <img src={props.image} alt=''/>
        </div>
        <div className="a-b-text">
            <h2> {props.title} </h2>
            <p>kjuhkuhkhukuh</p>
        </div>
    </div>
    </FeatureAbox>
  )
}

export default Featureconfig;