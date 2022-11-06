import React from 'react'
import styled from 'styled-components'
import feature1 from '../../../images/feature1.jpg'
import feature2 from '../../../images/feature2.jpg'
import feature3 from '../../../images/feature3.jpg'

const FeaturesContainer = styled.section`
height: auto;
width: 100vw;
display: grid;
place-items: center;
padding: 3rem 2rem;
background: rgb(0, 145, 255);


h1 {
  color: white;
  font-size: 4rem;
  margin:1rem 0;
}

.card-container{
  width: 90vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2rem 0;

  .card {
    width: 30rem;
    height: 40rem;
    margin: 2rem;
    background: #1d0e15;

    img {
  display:block;
  margin-left:auto;
  margin-right:auto;
  width: 100%;
  height: 50%;
  object-fit: cover;
  cursor: pointer;
    }
    .content {
      height: 50%;
      width: 100%;
      text-align: center;

      h1{
        color: #fff;
        font-size: 2.5rem;
      }
      p{
        font-size: 1.37rem;
        padding: .5rem;
        color: #fff;
      }
      button {
        margin: 1rem 2rem;
        border-radius: .5rem;
        color: white;
        padding: .5rem;
        background: rgb(0, 145, 255);
        transition: all 0.2s ease-out;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
`

const Feature = () => {
  return (
    <FeaturesContainer id='features'>

      <h1 className="fe1">FEATURES</h1>

      <div className="card-container">

        <div className="card">
          <img style={{width: '100%'}} src={feature1} alt=''></img>
          <div className="content">
            <h1>Muscle Building</h1>
            <p>exercises that will build you great functional strength, reducing stress on your joints in the process, resulting in a longer lifespan for those joints</p>
            <a href='!#'><button>learn more</button></a>
          </div>
        </div>

        <div className="card">
          <img src={feature2} alt=''></img>
          <div className="content">
            <h1>Fat Loss</h1>
            <p>Coaching to help you Lose weight, improving blood vessel functionality, sleep quality, and getting you the chiseled 6-pack you’ve always dreamed of.</p>
            <a href='!#'><button>learn more</button></a>
          </div>
        </div>

        <div className="card">
          <img src={feature3} alt=''></img>
          <div className="content">
            <h1>Diet</h1>
            <p>When Building Muscle Your Diet is Responsible For at Least 80% of Your Results, Find The Right Diet For You And Enjoy The Multiple Benefits of Your New Life Style</p>
            <a href='!#'><button>learn more</button></a>
          </div>
        </div>

      </div>

    </FeaturesContainer>
  )
}

export default Feature;