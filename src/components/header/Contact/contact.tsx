import React from 'react';
import styled from 'styled-components';
const ContactContainer = styled.section`
height: 500px;
width: 100%;
`

function Contact() {
  return (
    <ContactContainer>
        <div id='contact'>
            <h1>Contact Us</h1>
            <form>
                <input type='text' placeholder='Full Name' required/>
                <input type='email' placeholder='Type Your E-Mail' required/>
                <textarea placeholder='write here...' name='message'></textarea>
                <input type='submit' value='Send' />
            </form>
        </div>
    </ContactContainer>
  )
}

export default Contact