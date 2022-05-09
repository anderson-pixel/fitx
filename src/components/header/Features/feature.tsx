import React from 'react'
import styled from 'styled-components'
import catimg from '../../../images/catshot.png'

const FeaturesContainer = styled.section`
height: 700px;
width: 100%;

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
            <h1>header</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

        <div className="card">
          <img src={catimg} alt=''></img>
          <div className="content">
            <h1>eddlk otyoytl</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

        <div className="card">
          <img src={catimg} alt=''></img>
          <div className="content">
            <h1>yuh lfçre</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fuga est dolor totam obcaecati aliquid distinctio sint harum, velit sit cum ipsum eius necessitatibus porro, vitae ex facilis natus in?</p>
            <a href='#'><button>learn more</button></a>
          </div>
        </div>

      </div>

    </FeaturesContainer>
  )
}

export default Feature;