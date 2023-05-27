import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='blur hero-blur'></div>
      <div className='left'>
        <Header />
        <div className='the-best-ad'>
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>shape</span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div className='normal-text'>
            In here we will help you to shape your ideal body and live up your life to fullest.
          </div>
        </div>
        <div className='member-count'>
          <div>
            <span>+106</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+911</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+4</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className='hero-btns'>
          <button className='btns'>Get Started</button>
          <button className='btns'>Learn More</button>
        </div>
        <div className='calories'>
          <img src={calories} alt='' className='calories_image'></img>
          <div className='calories-detail'>
            <span>Calories burned</span>
            <span>220 Kcal</span>
          </div>
        </div>
      </div>
      <div className='right'>
        <button className='btns join-btn'>Join Now</button>
        <div className='heart-rate'>
          <img alt='' src={heart} className="heart"></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image}
          className="hero_image"
          alt=''></img>
        <img src={hero_image_back}
          alt='' className="hero_image_back"
        ></img>
      </div>
    </div>
  )
}

export default Hero
