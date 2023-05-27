import React from 'react'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import './Testimonials.css'

const Testimonials = () => {
    const [index,setIndex] = useState(0);
    const len = testimonialsData.length;
    return (
        <div className='Testimonials'>
            <div className='Testimonials-left'>
                <span className='header'>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span className='say'>SAY ABOUT US</span>
                <div className='coach-review'>
                    <p className='review'>{testimonialsData[index].review}</p>
                    <span className='coach-name'>{testimonialsData[index].name}-</span>
                    <span>{testimonialsData[index].status}</span>
                </div>
                <div className='arrows'>
                    <img src={leftArrow} alt=''
                        onClick={() => {
                            (index===0)
                            ? setIndex(len-1)
                            : setIndex(prev => prev-1)
                        }} className="leftArrow"
                    ></img>
                    <img className="rightArrow"
                    onClick={() => {
                        (index===len-1)
                        ? setIndex(0)
                        : setIndex(prev => prev+1)
                    }}
                    src={rightArrow} alt=''></img>
                </div>
            </div>
            <div className='Testimonials-right'>
                <div></div>
                <div></div>
                <img className="coach-image" src={testimonialsData[index].image} alt></img>
            </div>
        </div>
    )
}

export default Testimonials
