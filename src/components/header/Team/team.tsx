import React from 'react'
import styled from 'styled-components'
import catimg from '../../../images/catshot.png'

const TeamContainer = styled.section`
width: 100%;
height: 700px;

.box{
      height: 50rem;
      overflow: hidden;
      position: relative;

      &:hover {
          .content {
              left:-100%;
          }

          .share {
              left: 0;
          }
      }

      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      .content {
        position: absolute;
        bottom: 0;
        left: 0;
        background: white;
        padding: 1rem 2rem;

        span {
          font-size: 1.7rem;
          color: red;
        }

        h3{
          font-size:2rem;
          color: white;
        }
      }
      .share {
          position: absolute;
          bottom: 0;
          left: 0;
          background: white;
          padding: 1rem;

          a {
              font-size: 2rem;
              color: black;
              margin: 0 1rem;

              &:hover {
                  color: red;
              }
          }
      }
}
`

function Team() {
  return (
    <TeamContainer id="team" className="team">
        <div className="heading">
            <span>Team</span>
            <h3>placeholder</h3>
        </div>

        <div className="box-container container">

            <div className="box">
                <img src={catimg} alt="placeholder"></img>
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
                <img src={catimg} alt="placeholder"></img>
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
                <img src={catimg} alt="placeholder"></img>
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