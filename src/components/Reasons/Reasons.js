import React from 'react'
import image_1 from '../../assets/image1.png'
import image_2 from '../../assets/image2.png'
import image_3 from '../../assets/image3.png'
import image_4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nike from '../../assets/nike.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import './Reasons.css'

const Reasons = () => {
  return (
    <div className='reasons'>
      <div className='reasons-left'>
        <img src={image_1} className="image1" alt=''></img>
        <img src={image_2} className="image2" alt=''></img>
        <img src={image_3} alt=''className="image3"></img>
        <img src={image_4} alt=''className="image4"></img>
      </div>
      <div className='reasons-right'>
        <p className='reasons-header'>SOME REASONS</p>
        <span className='stroke-text why'>WHY</span>
        <span className='choose'>CHOOSE US?</span>
        <div>
          <div className='tick-box'>
            <img src={tick} alt=''></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div className='tick-box'>
            <img src={tick} alt=''></img>
            <span>TRAIN SMARTER AND FASTER THAN         BEFORE</span>
          </div>
          <div className='tick-box'>
            <img src={tick} alt=''></img>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div className='tick-box'>
            <img src={tick} alt=''></img>
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <p className='partner-header'>OUR PARTNERS</p>
        <div className='partners'>
          <img src={nb} alt=''></img>
          <img src={nike} alt=''></img>
          <img src={adidas} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Reasons
