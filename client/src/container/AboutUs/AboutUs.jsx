import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At <b>Silver Spoon</b>, we take pride in offering more than just a meal, we invite you to embark on an epicurean adventure, a sensory exploration that engages your taste buds and leaves a lasting imprint. Step into our establishment and discover a world where each dish is a celebration and each moment a memory.</p>
        <button type="button" className="custom__button"><a href="#chef">Know More</a></button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> <b>Silver Spoon</b> traces its roots back to a rich tapestry of culinary history that began with a vision to create a haven for food enthusiasts. Established in 2000, our restaurant has evolved over the years, weaving a narrative that reflects a commitment to excellence and a passion for the culinary arts.</p>
        <button type="button" className="custom__button"><a href="#chef">Know More</a></button>
      </div>
    </div>
  </div>
);

export default AboutUs;
