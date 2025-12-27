// 771843180@yousef

import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'
const InfoBox = ({text,link,btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1:(<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 '>
        Hello, i am <span className='font-semibold'>Yousef</span> <br />
        A <span className='font-semibold'>Full-Stack Developer</span> and <span className='font-semibold'>3D Enthusiast</span> <br />
    </h1>),
    2:(<InfoBox text="worked for many companies and has so mush experience" link="/about" btnText="Learn More"/>),
    3:(<InfoBox text="Made so much projects and has the ability to make more and more" link="/projects" btnText="See Projects"/>),
    4:(<InfoBox text="If you want to work with me, you can contact me dirctly by my mail" link="/contact" btnText="Contact"/>)
}

function HomeInfo({currentStage}) {
    return renderContent[currentStage] || null;
}

export default HomeInfo