import React from 'react';
import text from '../../Media/img/text.png'
import rect from '../../Media/img/rectangle.png'
import leave from '../../Media/img/leave.png'

import './Home.css'

const Home = () => {
    return (
        <>
            <div className='container'>
                <img className='back-text' src={text} alt="" />
                <div className="block">
                    <div className='block-left'>
                        <span id='bl-1'>Your home is where your plants are</span><br/><br/><br/><br/>
                        <span id='bl-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis pariatur exercitationem, quisquam corporis quae saepe vel, atque vitae, perferendis magni nobis inventore? Nostrum reprehenderit nam nobis, dolorum beatae similique eveniet?</span>
                    </div>
                    <div className='block-right'>
                        <img id='rect' src={rect} alt="" />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='siteBar'>
                    <img id='leave' src={leave} alt="" />
                    <ul className='siteBar-ul'>
                        <li><a href='#' className='sb-lists'>New</a></li>
                        <li><a href='#' className='sb-lists'>Popular</a></li>
                        <li><a href='#' className='sb-lists'>Sale</a></li>
                        <li><a href='#' className='sb-lists'>Gift certificates</a></li>
                    </ul>
                </div>
                <div className='cards'></div>
            </div>
        </>
    );
};

export default Home;