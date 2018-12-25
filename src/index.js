import React from 'react';
import ReactDOM from 'react-dom';
//var React = require('react');
//var ReactDOM = require('react-dom');

const addButonText = '+';
const subtractButtonText = '-';
const rootElement = document.getElementById("root");

class Adder extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClickFuncion}>
                {addButonText}
            </button>

        );
    }

}

class Subtracter extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClickFuncion}>
                {subtractButtonText}
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
    
    addOne = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };
    subtractOne = () => {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    };
    
    render() {
        return (
            <div>
                <Adder onClickFuncion={this.addOne} />
                <Result counter={this.state.counter} />
                <Subtracter onClickFuncion={this.subtractOne} />
            </div>
        );
    }
}

ReactDOM.render(<App />, rootElement);