import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import aboutimg from '../../../images/fitx1.png'

const AboutContainer = styled.section`
height: auto;
width: 100%;
`

function About() {
  return (
    <AboutContainer className='about' id='about'>

      <div className="image">
            <img src={aboutimg} className='' alt=''></img>
          </div>

          <div className="content">
            <h3><span>about us</span></h3>
            <h1>Daily Workout And Stay Active at Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio exercitationem enim impedit vitae dignissimos, deleniti omnis pariatur eum fugit libero, distinctio tempora voluptatem reiciendis, voluptate saepe corporis unde illo repellendus.</p>
            <ul>
              <li> <i>
       <FontAwesomeIcon icon={faCheckSquare} size="1x"/> </i>Lorem ipsum dolor ehenderit deleniti dolore doloribus tempora numquam, ab fugit!</li>
       <li> <i>
       <FontAwesomeIcon icon={faCheckSquare} size="1x"/> </i>Lorem ipsum dolor ehenderit deleniti dolore doloribus tempora numquam, ab fugit!</li>
       <li> <i>
       <FontAwesomeIcon icon={faCheckSquare} size="1x"/> </i>Lorem ipsum dolor ehenderit deleniti dolore doloribus tempora numquam, ab fugit!</li>
       <li> <i>
       <FontAwesomeIcon icon={faCheckSquare} size="1x"/> </i>Lorem ipsum dolor ehenderit deleniti dolore doloribus tempora numquam, ab fugit!</li>
            </ul>
          </div>

    </AboutContainer>
  )
}

export default About;