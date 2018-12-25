import React from 'react';
import ReactDOM from 'react-dom';
//var React = require('react');
//var ReactDOM = require('react-dom');

var addButonText = '+';
var subtractButtonText = '-';
var rootElement = document.getElementById("root");
var values = [1, 5, 10, 50, 100, 500, 1000];

class Adder extends React.Component {
    handleClick = () => {
        this.props.onClickFuncion(this.props.adderValue);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {addButonText}{this.props.adderValue}
            </button>
        );
    }

}

class Subtracter extends React.Component {
    handleClick = () => {
        this.props.onClickFuncion(this.props.subtracterValue);
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {subtractButtonText}{this.props.subtracterValue}
            </button>
        );
    }
}

var Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};



class App extends React.Component {
    state = { counter: 0 };

    add = (incValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incValue
        }));
    };
    subtract = (decValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter - decValue
        }));
    };

    createAdderButtons = () => {
        let adders = []

        for (let i = 0; i < values.length; i++) {
            adders.push(
                <Adder adderValue={values[i]} onClickFuncion={this.add} />
            )
        }
        return adders
    }

    createSubtractButtons = () => {
        let subtracters = []

        for (let i = 0; i < values.length; i++) {
            subtracters.push(
                <Subtracter subtracterValue={values[i]} onClickFuncion={this.subtract} />
            )
        }
        return subtracters
    }

    render() {
        return (
            <div>
                {this.createAdderButtons()}
                <Result counter={this.state.counter} />
                {this.createSubtractButtons()}
            </div>
        );
    }
}

ReactDOM.render(<App />, rootElement);