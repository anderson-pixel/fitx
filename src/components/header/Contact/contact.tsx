import React from 'react';
import styled from 'styled-components';
const ContactContainer = styled.section`
  width:100%;
  height: 580px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #070707;

h1 {
  color: #fff;
  font-size: 3rem;
}

.form {
  width:600px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
input,
textarea {
  width:100%;
  height: 45px;
    margin:5px 0px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #ffffff2d;
    color: #ffffff;
    border-radius: 5px;
}
textarea {
  height: 150px;
}
@media(max-width:620px){
    #contact form{
        width:90%;
    }
}
#submitinput {
  width: 110px;
  height: 35px;
  background: #ffffff;
  color: red;
  border: 1px solid red;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    color: #ffffff;
    background: linear-gradient(90deg, #FF1414 20%,#f70000);
  }
}
`

function Contact() {
  return (
    <ContactContainer id='contact'>
        <div>
            <h1>Contact Us</h1>
            <form>
                <input type='text' placeholder='Full Name' required/>
                <input type='email' placeholder='E-Mail' required/>
                <textarea placeholder='write here...' name='message'></textarea>
                <input id='submitinput'type='submit' value='Send' />
            </form>
        </div>
    </ContactContainer>
  )
}

export default Contact