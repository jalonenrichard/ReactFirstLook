import React from 'react';
import ReactDOM from 'react-dom';
//var React = require('react');
//var ReactDOM = require('react-dom');

var addButonText = '+';
var subtractButtonText = '-';
var rootElement = document.getElementById("root");
var values = [1, 5, 10, 50, 100, 500, 1000];
var firstValue = 1;
var secondValue = 5;
var thirdValue = 10;
var fourthValue = 50;
var fifthValue = 100;
var sixthValue = 500;
var seventhValue = 1000;

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

    render() {
        return (
            <div>

                <Adder adderValue={firstValue} onClickFuncion={this.add} />
                <Adder adderValue={secondValue} onClickFuncion={this.add} />
                <Adder adderValue={thirdValue} onClickFuncion={this.add} />
                <Adder adderValue={fourthValue} onClickFuncion={this.add} />
                <Adder adderValue={fifthValue} onClickFuncion={this.add} />
                <Adder adderValue={sixthValue} onClickFuncion={this.add} />
                <Adder adderValue={seventhValue} onClickFuncion={this.add} />
                <Result counter={this.state.counter} />
                <Subtracter subtracterValue={firstValue} onClickFuncion={this.subtract} />
                <Subtracter subtracterValue={secondValue} onClickFuncion={this.subtract} />
                <Subtracter subtracterValue={thirdValue} onClickFuncion={this.subtract} />
                <Subtracter subtracterValue={100} onClickFuncion={this.subtract} />
                <Subtracter subtracterValue={1000} onClickFuncion={this.subtract} />
            </div>
        );
    }
}

ReactDOM.render(<App />, rootElement);