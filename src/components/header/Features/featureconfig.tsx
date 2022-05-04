import React from 'react'

const Featureconfig: React.FC = (props) => {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt=''/>
        </div>
        <div className="a-b-text">
            <h2> {props.title} </h2>
            <p>lorem ipsum dolor sit amet</p>
        </div>
    </div>
  )
}

export default Featureconfig;