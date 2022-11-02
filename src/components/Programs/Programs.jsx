import React from "react";
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
      <div className="Programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">khám phá của chúng tôi</span>
            <span>các chương trình</span>
            <span className="stroke-text">để định hình bạn</span>
        </div>

        <div className="program-cate">
          {programsData.map((program)=>(
            <div className="cate">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Tham Gia Ngay</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Programs;