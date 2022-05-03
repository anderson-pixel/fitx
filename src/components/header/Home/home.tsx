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
}
`

function Home() {
  return (
    <HomeContainer>
    <div className="home-slider">
     <div className="wrapper">

         <div className="slide" style={{backgroundImage: "url('')  no-repeat;"}}>
             <div className="content">
                 <span></span>
                 <h3>YOOO</h3>
                 <a href="#" className="btn">get started</a>
             </div>
         </div>

         <div className="slide" style={{backgroundImage: "url('')  no-repeat;"}}>
             <div className="content">
                 <span></span>
                 <h3>SIUUUU</h3>
                 <a href="#" className="btn">get started</a>
             </div>
         </div>

          <div className="slide" style={{backgroundImage: "url('')  no-repeat;"}}>
             <div className="content">
                 <span></span>
                 <h3>AURHGHHH</h3>
                 <a href="#" className="btn">get started</a>
             </div>
         </div>  

     </div>
    </div>
    </HomeContainer>
  )
}

export default Home;