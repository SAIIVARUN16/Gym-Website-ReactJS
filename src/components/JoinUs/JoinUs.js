import React from 'react'
import { useRef } from 'react'
import './JoinUs.css'
import emailjs from '@emailjs/browser'

const JoinUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("hello");
        emailjs.sendForm('service_3adep05', 'template_h869159', form.current, 'fnb4YtdOayc9D9LeO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
  };
  return (
    <div className='JoinUs'>
      <div className='JoinUs-left'>
        <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className='JoinUs-right'>
        <form ref={form} className='email-form' onSubmit={sendEmail}>
            <input className='input' type="text" name='user_email' placeholder='Enter your Email address here'></input>
            <button className='JoinUs-btn'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default JoinUs
