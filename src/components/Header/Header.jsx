import React, { useState } from "react";
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';



const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />
            {(menuOpened === false && mobile === true) ? (
                <div
                    style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', boderRadius: '5px' }}

                    onClick={() => setMenuOpened(true)}
                ><img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} /></div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <a>Trang Chủ</a>
                    </li>
                    <li>
                        <a>Chế Độ Tập</a>
                    </li>
                    <li>
                        <a>Tại sao là chúng tôi</a>
                    </li>
                    <li>
                        <a>Các Kế hoạch</a>
                    </li>
                    <li>
                        <a>Lời chứng thực</a>
                    </li>
                </ul>
            )}
        </div>
    )
};

export default Header