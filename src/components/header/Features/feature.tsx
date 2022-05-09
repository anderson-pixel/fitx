import React from 'react'
import styled from 'styled-components'
import catimg from '../../../images/catshot.png'

const FeaturesContainer = styled.section`
height: auto;
width: 100vw;
display: grid;
place-items: center;
padding: 3rem 2rem;

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
    <FeaturesContainer>

      <h1 id='features' className="fe1">FEATURES</h1>

      <div className="card-container">

        <div className="card">
          <img src={catimg} alt=''></img>
          <div className="content">
            <h1>Weight training</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

        <div className="card">
          <img src={catimg} alt=''></img>
          <div className="content">
            <h1>Cardio</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

        <div className="card">
          <img src={catimg} alt=''></img>
          <div className="content">
            <h1>Placeholder</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

      </div>

    </FeaturesContainer>
  )
}

export default Feature;