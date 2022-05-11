import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import aboutimg from '../../../images/aboutimg.png'

const AboutContainer = styled.section`
height: auto;
width: 100%;
`

function About() {
  return (
    <AboutContainer className='about' id='about'>

      <div className="image">
            <img src={aboutimg} className='w-100' alt=''></img>
          </div>

          <div className="content">
            <h3>yergh</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio exercitationem enim impedit vitae dignissimos, deleniti omnis pariatur eum fugit libero, distinctio tempora voluptatem reiciendis, voluptate saepe corporis unde illo repellendus.</p>
            <a href='#menu' className="btn">our menu</a>
          </div>

    </AboutContainer>
  )
}

export default About;