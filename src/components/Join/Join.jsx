import React from "react";
import { useRef } from "react";
import './Join.css'
// import emailjs from '@emailjs/browser'

const Join = () => {
      const form = useRef()

    //   const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_cvqhx53', 'template_r7o0egn', form.current, 'ZgrFcjzAs_Meq4-1r')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //     };

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr/>
                <div>
                    <span className="stroke-text">SẴN SÀNG ĐỂ</span>
                    <span> THĂNG CẤP</span>
                </div>
                <div>
                    <span>CƠ THỂ CỦA BẠN</span>
                    <span className="stroke-text"> VỚI CHÚNG TÔI?</span>
                </div>
            </div>



            <div className="right-j">
                <form ref={form} className="email-container">
                    <input type="email" name="user_email" placeholder="Enter your email address her" />
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
        </div>
    )
}


export default Join;