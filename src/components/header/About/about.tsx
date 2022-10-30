import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import aboutimg from '../../../images/about-img.jpg';

const AboutContainer = styled.section`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 8rem;
background: #111;

.about-btn {
  margin-top: 1rem;
  display: inline-block;
  padding:1rem 3rem;
  background: red;
  color: white;
  border: 1px solid red;
  cursor: pointer;
  border-radius: .5rem;
  font-size: 1.8rem;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
}

.image {
  flex: 1 1 42rem;
  position: relative;
  img{
    width: 100%;
    padding: 2rem;
  }
}

.content {
  flex: 1 1 42rem;

  span {
    font-size: 2rem;
    color: red;
  }
  .title {
    font-size: 4rem;
    color: white;
    margin-top: .5rem;
  }

  p{
    font-size: 1.5rem;
    color: #aaa;
    padding: 1rem 0;
    line-height: 2;
  }

  .box-container {
    margin-top: 1rem;

    .box {
      flex: 1 1 20rem;

      h3{
        font-size: 2rem;
        color: white;

        i{
          padding-right: 1.5rem;
          color: red;
        }
      }
    }
  }
}

ul {
  font-size: 1.3rem;
  color: #fff;
}
li {
  padding: 3rem 0;
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
            <h2 className="title"></h2>
            <p></p>
            <div className="box-container">
              <div className="box">
                <h3><i>
       <FontAwesomeIcon icon={faCheck} size="1x"/></i>Custom Workouts</h3>
                <p>All the exercises that work for your body type...and get you serious RESULTS!</p>
              </div>
              <div className="box">
                <h3><i>
       <FontAwesomeIcon icon={faCheck} size="1x"/></i>Custom Meal Plan</h3>
                <p>The best fat-burning and muscle-building foods designed for your body type and metabolism.</p>
              </div>
              <div className="box">
                <h3><i>
       <FontAwesomeIcon icon={faCheck} size="1x"/></i>24/7 Support</h3>
                <p>UNLIMITED email and text message support with your own trainer</p>
              </div>
              <div className="box">
                <h3><i>
       <FontAwesomeIcon icon={faCheck} size="1x"/></i>30 Day 100% Refund</h3>
                <p>30 Day trial period with 100% Refund guaranteed</p>
              </div>
            </div>
            <a href="#" className="about-btn">read more</a>
          </div>
    </AboutContainer>
  )
}

export default About;