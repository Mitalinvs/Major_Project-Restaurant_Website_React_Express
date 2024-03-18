import React from 'react';                  //import is necessary for writing JSX (JavaScript XML) syntax
import ReactDOM from 'react-dom';           //for rendering React components into the DOM (Document Object Model)

import './index.css';
import App from './App';                    //imports the App component from a file named App.js

ReactDOM.render(<App />, document.getElementById('root'));      //render a 'App' component into the DOM by specifying where to render- app component mein jo bhi likhenge, woh dom pe aayega