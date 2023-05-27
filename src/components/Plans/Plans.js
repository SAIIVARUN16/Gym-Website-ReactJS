import React from 'react'
import { plansData } from '../../data/plansData'
import './Plans.css'
import rightArrow from '../../assets/rightArrow.png'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
return (
    <div className='plans-container'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='plans-header'>
            <span className='stroke-text'>READY TO START</span>
            <span style={{color:"white"}}>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        <div className='plans'>
            {plansData.map((plan,i) => (
                <div className='plans-detail' key={i}>
                    <div className='name-price'>
                        {plan.icon} 
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                    </div>
                    <div className='features'>
                        {plan.features.map((feature,i) => (
                        <div className='feature'>
                            <img src={whiteTick} alt=''></img>
                            <span key={i}>{feature}</span>
                        </div>
                        ))}
                        <div className='see-benefits'>
                            <span>See more benefits</span>
                            <img src={rightArrow} alt=''></img>
                        </div>
                        <button className='plan-btn'>Join Now</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}

export default Plans
