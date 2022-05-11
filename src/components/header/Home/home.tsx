import React from 'react';
import styled from 'styled-components';
import imghome from '../../../images/img6.jpg'

const HomeContainer = styled.section`
padding: 0;
height: 670px;
background: url(${imghome}), linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8));
background-size: cover;
background-position: center;
background-blend-mode: multiply;
background-attachment: fixed;
padding-top: 5rem;
position: relative;
text-align: center;

.slide {
    min-height:70vh;
    background-size: cover;
    background-position: center;
    padding:2rem 9%;
    display: flex;
    align-items: center;

    .content {
        width:60rem;

        span {
            font-size: 2rem;
            display: block;
            color: red;
        }
        h3 {
            font-size: 5rem;
            padding: 1rem 0; 
        }
        .btn {
            margin-top: 1rem;
            display: inline-block;
            padding:1rem 3rem;
            background: white;
            color: red;
            border: 1px solid red;
            cursor: pointer;
            border-radius: .5rem;
            font-size: 1.8rem;
            text-transform: capitalize;
            transition: all 0.2s ease-in-out;
            &:hover{
            background: red;
            color: white; 
        }
        }
    }
}
`

const Home = () => {
  return (
    <HomeContainer id="home">
     <div className="home-slider">
     <div className="wrapper">

         <div className="row"></div>

         <div className="slide" style={{backgroundImage: "url('')  no-repeat;"}}>
             <div className="content">
                 <span>Yeah</span>
                 <h3>Lorem ipsum dolor sit amet consectetur</h3>
                 <a href="#features" className="btn">get started</a>
             </div>
         </div>

     </div>
    </div>
    </HomeContainer>
  )
}

export default Home;