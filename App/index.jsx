import React from 'react';
import ReactDOM from 'react-dom'; // attaches react app to html5
import './index.css'; // styling for body
import Splash from './splash'


function App () {
  return <Splash />
}

ReactDOM.render( < App /> , document.querySelector('.app'));
