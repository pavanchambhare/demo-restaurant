import React from 'react';

import about from '../../assets/About.png'
import our from '../../assets/our.png'

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" >
    <div className="app__aboutus-overlay flex__center">
    <h3>About Page</h3>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
       
      <h2>About Us</h2>
       <img src={about} alt="About" id='img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      
      </div>

      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">Our History</h2>
        <img src={our} alt="our" id='img' />

     
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  
);

export default AboutUs;