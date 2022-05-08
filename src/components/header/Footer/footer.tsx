import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
height: 850px;
width: 100%;
background: black;
justify-content: center;
align-items: center;
display: flex;

  .box{

    h3{
      font-size: 2.2rem;
      color:$white;
      padding:1rem 0;
    }

    .links{
      font-size: 1.5rem;
      display: block;
      color:$light-white;
      padding:1rem 0;

      &:hover{
        color:$red;
      }
    }

    p{
      font-size: 1.5rem;
      color:$light-white;
      padding:1rem 0;

      i{
        padding-right: .5rem;
        color:$red;
      }
    }

    .share{
      padding:1rem 0;

      a{
        height: 4.5rem;
        width: 4.5rem;
        line-height: 4.5rem;
        font-size: 1.7rem;
        color:$white;
        background: $light-bg;
        border-radius: 50%;
        margin-right: .5rem;
        text-align:center;

        &:hover{
          background: $red;
        }
      }
    }

    form{

      .email{
        margin-bottom: 1rem;
        width: 100%;
        background: $light-bg;
        padding:1.2rem;
        font-size: 1.5rem;
        color:$white;
        text-transform: none;
      }
    }
  }
`

function Footer() {
  return (
    <FooterContainer className="footer">
    <div className="box-container">

      <div className="box">
        <h3>links</h3>
        <a className="links" href="#home">home</a>
          <a className="links" href="#fetures">features</a>
          <a className="links" href="#pricing">pricing</a>
          <a className="links" href="#trainers">trainers</a>
          <a className="links" href="#contact">contact</a>
      </div>

      <div className="box">
        <h3>Opening Hours</h3>
        <p> monday : <i> 7:00am - 10:30pm </i> </p>
        <p> tuesday : <i> 7:00am - 10:30pm </i> </p>
        <p> wednesday : <i> 7:00am - 10:30pm </i> </p>
        <p> fryday : <i> 7:00am - 10:30pm </i> </p>
        <p> saturday : <i> 7:00am - 10:30pm </i> </p>
        <p> sunday : <i> 7:00am - 10:30pm </i> </p>
      </div>

      <div className="box">
       <h3>also</h3>
       <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
       <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
       <p> <i className="fas fa-envelope"></i> @kdkmefmfmesmf </p>
       <p> <i className="fas fa-map"></i> yergh feksnfksemnfk ogrirgj </p>
       <div className="share">
          <a className="fab fa-facebook-f" href="#"></a>
          <a className="fab fa-twitter" href="#"></a>
          <a className="fab fa-linkedin" href="#"></a>
          <a className="fab fa-pinterest" href="#"></a>
       </div>
      </div>      

    </div>
    </FooterContainer>
  )
}

export default Footer;