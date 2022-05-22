import React from 'react';
import styled from 'styled-components';
import imghome from '../../../images/img6.jpg'

const HomeBg = styled.div`
background: url(${imghome}), linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8));
background-size: cover;
background-position: center;
background-blend-mode: multiply;
color: #fff;
`

const HomeContainer = styled.section`
padding: 0;
height: 625px;
text-align: center;
align-items: center;
display: flex;
align-items: center;

@media (max-width: 768px) {
    justify-content: center;
}

.slide {
    min-height:70vh;
    background-size: cover;
    background-position: center;
    padding:2rem 9%;
    display: flex;
    align-items: center;

    .content {
        width:60rem;

        @media (max-width: 768px) {
                width: 25rem;
    }

        span {
            font-size: 2rem;
            display: block;
            color: red;
        }
        h3 {
            font-size: 5rem;
            padding: 1rem 0; 
            color: #fff;
            @media (max-width: 768px) {
                font-size: 4rem;
    }
        }
        .btn {
            margin-top: 1rem;
            display: inline-block;
            padding:0.5rem 2rem;
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
    <HomeBg className="home-bg">
    <HomeContainer id="home">
     <div className="home-slider">
     <div className="wrapper">

         <div className="row"></div>

         <div className="slide" style={{backgroundImage: "url('')  no-repeat;"}}>
             <div className="content">
                 <h3>RESULTS, BUILT FOR YOUR BODY</h3>
                 <h4 style={{fontSize: '2rem'}}>World-Class Training Programs, Custom Diet Plans, Premium Content, and 1-1
Training with Certified Fitx Coaches!</h4>
                 <a href="#features" className="btn">get started</a>
             </div>
         </div>

     </div>
    </div>
    </HomeContainer>
    </HomeBg>
  )
}

export default Home;