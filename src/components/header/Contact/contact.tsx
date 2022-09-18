import React from 'react';
import styled from 'styled-components';
const ContactContainer = styled.section`
  width:100%;
  height: 580px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #d11a2a;

  in-put-msg {
    background-color: black;
  }

  input[type="text"], textarea {

background-color : black; 

}

  .in-put {
  background-color: black;
  color: #fff;
  }

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
    color: #ffffff;
    background: black;
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
  background: black;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    color: black;
    background: #bdacac;
    transform: scale(1.1);
  }
}
`

function Contact() {
  return (
    <ContactContainer id='contact'>
        <div>
            <h1>Contact Us</h1>
            <form>
                <input className='in-put' type='text' placeholder='Full Name' required/>
                <input className='in-put' type='email' placeholder='E-Mail' required/>
                <textarea placeholder='write here...' className='in-put-msg' name='message'></textarea>
                <input className='in-put' id='submitinput'type='submit' value='Send' />
            </form>
        </div>
    </ContactContainer>
  )
}

export default Contact