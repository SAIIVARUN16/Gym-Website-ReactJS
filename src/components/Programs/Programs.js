import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
import newheart from '../../assets/newheart.png'
const Programs = () => {
  return (
    <section className='Programs'>
      <div className='Programs-header'>
        <span className='stroke-text'>explore our</span>
        <span>programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className='Programs-box-block'>
        {programsData.map((program) => (
            <div className='Programs-box'>
              {(program.heading != 'Health Fitness')
              ? program.image
              :<img src={newheart} className="healthyHeart"></img>
              }
              <p>{program.heading}</p>
              {(program.heading != 'Health Fitness')
              ?<p style={{marginBottom:"41px"}}>{program.details}</p>
              :<p>{program.details}</p>}
              <div className='join-now'>
                <span>Join Now</span>
                <img src={rightArrow} alt='' className='rightArrow'></img>
              </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Programs
