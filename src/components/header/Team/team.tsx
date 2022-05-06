import React from 'react'
import styled from 'styled-components'

const TeamContainer = styled.section`
width: 100%;
height: 600px;
`

function Team() {
  return (
    <TeamContainer id="team">
        <div className="heading">
            <span>Team</span>
            <h3>placeholder</h3>
        </div>

        <div className="box-container container">

            <div className="box">
                <img src="" alt="placeholder"></img>
                <div className="content">
                    <span>placeholder</span>
                    <h3>placeholder</h3>
                </div>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
            </div>

            <div className="box">
                <img src="" alt="placeholder"></img>
                <div className="content">
                    <span>placeholder</span>
                    <h3>placeholder</h3>
                </div>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
            </div>

            <div className="box">
                <img src="" alt="placeholder"></img>
                <div className="content">
                    <span>placeholder</span>
                    <h3>placeholder</h3>
                </div>
                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
            </div>

        </div>
    </TeamContainer>
  )
}

export default Team;