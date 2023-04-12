import './mainPage.css';
import React, {useEffect, useState} from 'react';
function MainPage() {
    const [show, setShow] = useState(false);

    const handleOnClick = async () => {
        setShow(true)
    };

    const handleOnClose = async () => {
        setShow(false)
    };
    const mainStyle = show ? `main blur` : 'main'

 return (
         <div className={mainStyle}>
            <div className='container'>
                <div className='left-bar'>

                    <a className='logo' href='/'></a>
                    <span className='copyright'>
                        // THE MODERN COMPANY
                    </span>
                    <a className='menu-item' href='#'>
                        001
                    </a>

                </div>

                <div className='content'>
                    <div className='title'>ENTRY TEST_</div>
                    <div className='main-block'>
                        <div>
                            {show ?
                                <>
                                    <div className='modal'>
                                        <div className='modal-header'>
                                            <div className='close-modal' onClick={handleOnClose}></div>
                                        </div>
                                        <div className='modal-content'>
                                            <span className='icon'></span>
                                            <span className='title'>DATA KEY</span>
                                        </div>
                                    </div>
                                    <button className='main-button' onClick={handleOnClose}>
                                        BACK HOME
                                    </button>
                                </> :
                                <button className='main-button' onClick={handleOnClick}>
                                    REVEAL NOW
                                </button>
                            }

                        </div>
                        <div className='content-copyright'>
                            © 2023 TPW - ALL RIGHTS RESERVED.
                        </div>
                    </div>
                    <div className='patch'>
                        <span>
                         C:\EXERCISE\PROGRAMS\01.EXE
                        </span>

                        <div className='close' onClick={handleOnClose}></div>
                    </div>

                </div>

            </div>
         </div>
     )

}

export default MainPage;
