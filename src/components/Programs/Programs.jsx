import React from 'react'
import "./programs.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='gradient__text'>Shape yourself</span>
            <span className='gradient__text'>through </span>
            <span className='gradient__text2'>our Programs</span>
        </div>
      <div className="programs-categories">
        {programsData.map((program)=>(
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join now</span><img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
