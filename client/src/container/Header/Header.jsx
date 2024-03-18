import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* title is a prop here */}
      <SubHeading title="Chase the new flavour" />    
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to <b>Silver Spoon</b>, where dining transcends the ordinary and becomes a symphony of flavors and craftsmanship. Our culinary journey is a celebration of passion and dedication, evident in every dish we serve. From farm-fresh ingredients to innovative culinary techniques, we meticulously curate a menu that promises to elevate your dining experience.</p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
