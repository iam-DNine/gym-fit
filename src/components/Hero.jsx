import React from "react";
import Header from "./Header/Header";
import './Hero.css';
import hero_image from "../img/hero_image.png";
import hero_image_back from "../img/hero_image_back.png";
import Heart from "../img/heart.png";
import Calories from "../img/calories.png";


const Hero = () => {

    const mobile = window.innerWidth<=768 ? true: false;
    return (
        <div className="hero">

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>Câu Lạc Bộ Phù Hợp Nhất Trong Thị Trấn</span>
                </div>


                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Định Hình </span>
                        <span>Của Bạn</span>
                    </div>
                    <div>
                        <span>Thể Hình Lý Tưởng</span>
                    </div>
                    <div>
                        <span>Tại đây, chúng tôi sẽ giúp bạn định hình và xây dựng thân hình lý tưởng và sống hết mình</span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+198</span>
                        <span>huấn luyện viên chuyên nghiệp</span>
                    </div>
                    <div>
                        <span>+1056</span>
                        <span>các thành viên đã tham gia</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>chương trình thể dục</span>
                    </div>
                </div>
                <div className="hero-button">
                    <button className="btn">Bắt Đầu</button>
                    <button className="btn">Tìm Hiểu Thêm</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Tham Gia Ngay</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Nhịp Tim</span>
                    <span>128 bpm</span>
                </div>


                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />


                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calo Bị Đốt Cháy</span>
                        <span>280 Kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;