import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from './container';
import { Navbar, Bookt } from './components';
import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path='/book'element={<Bookt />}></Route>
      </Routes>
    </BrowserRouter>

    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Bookt />
    <Footer />
  </div>
);

export default App;