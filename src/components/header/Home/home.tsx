import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
padding: 0;
margin-top: 6.5rem;

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
            padding:1rem 2.8rem;
            padding-right: 3rem;
            background: linear-gradient(130deg, red, transparent 90%);
            cursor: pointer;
            font-size: 1.7rem;
            color: ${props => props.theme.colors.text};

            &:hover {
                transform: scale(1.1);
            }
        }
    }
}
`

const Home = () => {
  return (
    <HomeContainer>
     <div className="home-slider">
     <div className="wrapper">

         <div className="row"></div>

         <div className="slide" style={{backgroundImage: "url('')  no-repeat;"}}>
             <div className="content">
                 <span>Yeah</span>
                 <h3>Lorem ipsum dolor sit amet consectetur</h3>
                 <a href="#" className="btn">get started</a>
             </div>
         </div>

     </div>
    </div>
    </HomeContainer>
  )
}

export default Home;