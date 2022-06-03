import React from 'react';
import text from '../../Media/img/text.png'
import rect from '../../Media/img/rectangle.png'
import leave from '../../Media/img/leave.png'
import star from '../../Media/img/star.png'
import heart from '../../Media/img/heart-circle.png'
import frash from '../../Media/img/flash.png'
import gift from '../../Media/img/gift.png'
import line from '../../Media/img/line.png'
import line2 from '../../Media/img/line2.png'

import './Home.css'

const Home = () => {
    return (
        <>
            <div className='container'>
                <img className='back-text' src={text} alt="text-img" />
                <div className="block">
                    <div className='block-left'>
                        <span id='bl-1'>Your home is where your plants are</span><br/><br/><br/><br/>
                        <span id='bl-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis pariatur exercitationem, quisquam corporis quae saepe vel, atque vitae, perferendis magni nobis inventore? Nostrum reprehenderit nam nobis, dolorum beatae similique eveniet?</span>
                    </div>
                    <div className='block-right'>
                        <img id='rect' src={rect} alt="rect" />
                    </div>
                </div>
            </div>
            <div className='container sectionFirst'>
                <div className='siteBar'>
                    <img id='leave' src={leave} alt="" />
                    <ul className='siteBar-ul'>
                        <li><img src={star} alt="star" /><a href='#' className='sb-lists'>New</a></li>
                        <img src={line} alt="line" />
                        <li><img src={heart} alt="heart" /><a href='#' className='sb-lists'>Popular</a></li>
                        <img src={line} alt="line" />
                        <li><img src={frash} alt="frash" /><a href='#' className='sb-lists'>Sale</a></li>
                        <img src={line} alt="line" />
                        <li><img src={gift} alt="gift" /><a href='#' className='sb-lists'>Gift certificates</a></li>
                        <img src={line2} alt="line" />
                    </ul>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src="#" alt="card" />
                        <span>Name</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;