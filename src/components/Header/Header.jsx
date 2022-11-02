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
                        <link>Trang Chủ</link>
                    </li>
                    <li>
                        <link>Chế Độ Tập</link>
                    </li>
                    <li>
                        <link>Tại sao là chúng tôi</link>
                    </li>
                    <li>
                        <link>Các Kế hoạch</link>
                    </li>
                    <li>
                        <link>Lời chứng thực</link>
                    </li>
                </ul>
            )}
        </div>
    )
};

export default Header