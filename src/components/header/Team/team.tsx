import React from 'react';
import styled from 'styled-components';
import catimg from '../../../images/catshot.png';
import trainer1 from '../../../images/trainer1.jpg'
import trainer2 from '../../../images/trainer2.jpg'
import trainer3 from '../../../images/trainer3.jpg'
import trainer4 from '../../../images/trainer4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';


const TeamContainer = styled.section`
width: 100%;
height: auto;

@media (max-width: 460px) {
  height: 1700px;
}
`

function Team() {
  return (
    <TeamContainer id="trainers" className="team">

      <h1 className="heading">our Team</h1>

      <div className="box-container">

        <div className="box">
          <img src={trainer1} alt=''></img>
          <div className="info">
            <h3>aolo</h3>
          </div>
          <div className="share">
          <a href='#'><i><FontAwesomeIcon icon={faFacebook} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faTwitter} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faInstagram} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faLinkedin} size="1x"/></i></a>
          </div>
        </div>

        <div className="box">
          <img src={trainer2} alt=''></img>
          <div className="info">
            <h3>bolo</h3>
          </div>
          <div className="share">
          <a href='#'><i><FontAwesomeIcon icon={faFacebook} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faTwitter} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faInstagram} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faLinkedin} size="1x"/></i></a>
          </div>
        </div>

        <div className="box">
          <img src={trainer3} alt=''></img>
          <div className="info">
            <h3>colo</h3>
          </div>
          <div className="share">
            <a href='#'><i><FontAwesomeIcon icon={faFacebook} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faTwitter} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faInstagram} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faLinkedin} size="1x"/></i></a>
          </div>
        </div>

        <div className="box">
          <img src={trainer4} alt=''></img>
          <div className="info">
            <h3>dolo</h3>
          </div>
          <div className="share">
            <a href='#'><i><FontAwesomeIcon icon={faFacebook} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faTwitter} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faInstagram} size="1x"/></i></a>
            <a href='#'><i><FontAwesomeIcon icon={faLinkedin} size="1x"/></i></a>
          </div>
        </div>

      </div>

    </TeamContainer>
  )
}

export default Team;