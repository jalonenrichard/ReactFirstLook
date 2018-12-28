import React from 'react';
import ReactDOM from 'react-dom';
import Navigator from './navbar';
import Welcome from './welcome';

const navRoot = document.getElementById("navigation");
const contentRoot = document.getElementById("pageContent");

ReactDOM.render( < Navigator / > , navRoot);
ReactDOM.render( < Welcome / > , contentRoot);