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
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
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
            <h2 className="title">Every Time i Wake Up is Another Day </h2>
            <p>gotta get that paper in another way</p>
            <div className="box-container">
              <div className="box">
                <h3><i>
       <FontAwesomeIcon icon={faCheck} size="1x"/></i>body and mind</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic.</p>
              </div>
              <div className="box">
                <h3><i>
       <FontAwesomeIcon icon={faCheck} size="1x"/></i>healthy life</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic.</p>
              </div>
              <div className="box">
                <h3><i>
       <FontAwesomeIcon icon={faCheck} size="1x"/></i>strategies</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic.</p>
              </div>
              <div className="box">
                <h3><i>
       <FontAwesomeIcon icon={faCheck} size="1x"/></i>workout</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, hic.</p>
              </div>
            </div>
            <a href="#" className="btn">read more</a>
          </div>
    </AboutContainer>
  )
}

export default About;