import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import aboutimg from '../../../images/fitx1.png'

const AboutContainer = styled.section`
height: auto;
width: 100%;

ul {
  font-size: 1.3rem;
}
li {
  padding: 1rem 0;
}
`

function About() {
  return (
    <AboutContainer className='about' id='about'>

      <div className="image">
            <img src={aboutimg} className='' alt=''></img>
          </div>

          <div className="content">
            <h3><span>about Fitx</span></h3>
            <h1>Daily Workout And Stay Active at Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio exercitationem enim</p>
            <ul>
              <li> <i>
       <FontAwesomeIcon icon={faCheckSquare} size="1x"/> </i>Fast 45 minute workouts, get you in and out of the gym quick</li>
       <li> <i>
       <FontAwesomeIcon icon={faCheckSquare} size="1x"/> </i>Short HIIT cardio sessions that rapidly accelerate fat loss and keep you burning fat for 48 hours after your cardio session</li>
       <li> <i>
       <FontAwesomeIcon icon={faCheckSquare} size="1x"/> </i>Recipes and dieting tips to finally get you a symetrical 6 pack</li>
       <li> <i>
       <FontAwesomeIcon icon={faCheckSquare} size="1x"/> </i>30 day 100% money back guarantee</li>
            </ul>
          </div>

    </AboutContainer>
  )
}

export default About;