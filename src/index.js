import React from 'react';
import ReactDOM from 'react-dom';
import UserGenerator from './username_generator';
import HsApp from './hs_api';
import CounterApp from './counter';
import ExpenseApp from './expense';

const counterRoot = document.getElementById("counter");
const hsApiRoot = document.getElementById("hsApi");
const expenseApiRoot = document.getElementById("expenses");
const usernameGeneratorRoot = document.getElementById("username_generator");

ReactDOM.render(<CounterApp />, counterRoot);
ReactDOM.render(<HsApp />, hsApiRoot);
ReactDOM.render(<ExpenseApp />, expenseApiRoot);
ReactDOM.render(<UserGenerator />, usernameGeneratorRoot);