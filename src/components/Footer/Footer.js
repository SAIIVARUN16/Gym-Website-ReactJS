import React from 'react'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className='footer'>
        <img src={github} alt=''></img>
        <img src={instagram} alt=''></img>
        <img src={linkedin} alt=''></img>
      </div>
      <img src={logo} className='logo footer-logo' alt=''></img>
      <div className='blur blur-left'></div>
      <div className='blur blur-right'></div>
    </div>
  )
}

export default Footer
