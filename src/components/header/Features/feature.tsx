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
background: #d11a2a;

@media (max-width: 1000px) {
    height: 900px;
}
@media (max-width: 668px) {
    height: 1500px
}


h1 {
  color: white;
  font-size: 4rem;
  margin:2rem 0;
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
    background: #fff;

    img {
      display:block;
  margin-left:auto;
  margin-right:auto;
  width: 100%;
  height: 50%;
  object-fit: cover;
    }
    .content {
      height: 50%;
      width: 100%;
      text-align: center;

      h1{
        color: red;
        font-size: 2.5rem;
      }
      p{
        font-size: 1.2rem;
        padding: .5rem;
        color: black;

        
        @media (max-width: 468px) {
          font-size: 1.1rem;
        }

        @media (max-width: 328px) {
          font-size: 1rem;
        }
      }
      button {
        margin: 1rem 0;
        border: 2px solid red;
        border-radius: 5px;
        color: red;
        padding: .5rem;
        transition: all 0.2s ease-out;
        cursor: pointer;

        &:hover {
          background: red;
          color: white;
          border: 2px solid white;
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
          <img src={feature1} alt=''></img>
          <div className="content">
            <h1>Weight training</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

        <div className="card">
          <img src={feature2} alt=''></img>
          <div className="content">
            <h1>Cardio</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

        <div className="card">
          <img src={feature3} alt=''></img>
          <div className="content">
            <h1>Diet</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

      </div>

    </FeaturesContainer>
  )
}

export default Feature;