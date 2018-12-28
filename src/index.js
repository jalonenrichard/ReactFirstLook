import React from 'react';
import ReactDOM from 'react-dom';
import Navigator from './navbar';
import Welcome from './welcome';
import Footer from './footer';

const navRoot = document.getElementById("navigation");
const contentRoot = document.getElementById("pageContent");
const footerRoot = document.getElementById("footer");

ReactDOM.render(< Navigator />, navRoot);
ReactDOM.render(< Welcome />, contentRoot);
ReactDOM.render(< Footer />, footerRoot)