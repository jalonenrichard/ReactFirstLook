import React from 'react';
import ReactDOM from 'react-dom';
import UserGenerator from './username_generator';
import HsApp from './hs_api';
import CounterApp from './counter';
import ExpenseApp from './expense';

const root = document.getElementById("root");
const counterRoot = document.getElementById("counter");
const hsApiRoot = document.getElementById("hsApi");
const expenseApiRoot = document.getElementById("expenses");
const usernameGeneratorRoot = document.getElementById("username_generator");

class App extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="album py-5 bg-light">
                    <div class="container">

                        <UserGenerator />

                        <CounterApp />

                        <HsApp />

                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<App />, root);