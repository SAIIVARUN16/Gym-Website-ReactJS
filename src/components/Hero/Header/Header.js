import React from 'react'
import './Header.css'
import logo from '../../../assets/logo.png'
const Header = () => {
  return (
    <div className='header'>
      <img alt='' src={logo} className="logo"></img>
      <ul className='header-ul'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header
