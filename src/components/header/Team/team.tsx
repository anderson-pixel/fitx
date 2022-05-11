import React from 'react';
import styled from 'styled-components';
import catimg from '../../../images/catshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';


const TeamContainer = styled.section`
width: 100%;
height: 700px;
`

function Team() {
  return (
    <TeamContainer id="trainers" className="team">

      <h1 className="heading">our services</h1>

      <div className="box-container">

        <div className="box">
          <img src={catimg} alt=''></img>
          <div className="info">
            <h3>aolo</h3>
          </div>
          <div className="share">
          <a href=''><i><FontAwesomeIcon icon={faFacebook} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faTwitter} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faInstagram} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faLinkedin} size="1x"/></i></a>
          </div>
        </div>

        <div className="box">
          <img src={catimg} alt=''></img>
          <div className="info">
            <h3>bolo</h3>
          </div>
          <div className="share">
          <a href=''><i><FontAwesomeIcon icon={faFacebook} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faTwitter} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faInstagram} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faLinkedin} size="1x"/></i></a>
          </div>
        </div>

        <div className="box">
          <img src={catimg} alt=''></img>
          <div className="info">
            <h3>colo</h3>
          </div>
          <div className="share">
          <a href=''><i><FontAwesomeIcon icon={faFacebook} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faTwitter} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faInstagram} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faLinkedin} size="1x"/></i></a>
          </div>
        </div>

        <div className="box">
          <img src={catimg} alt=''></img>
          <div className="info">
            <h3>dolo</h3>
          </div>
          <div className="share">
            <a href=''><i><FontAwesomeIcon icon={faFacebook} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faTwitter} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faInstagram} size="1x"/></i></a>
            <a href=''><i><FontAwesomeIcon icon={faLinkedin} size="1x"/></i></a>
          </div>
        </div>

      </div>

    </TeamContainer>
  )
}

export default Team;