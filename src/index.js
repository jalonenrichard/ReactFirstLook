import React from 'react';
import ReactDOM from 'react-dom';
//import CardList from './hsApi';
//var React = require('react');
//var ReactDOM = require('react-dom');

var addButonText = '+';
var subtractButtonText = '-';
var rootElement = document.getElementById("counter");
const rootElement2 = document.getElementById("hsApi");
var values = [1, 5, 10, 50, 100, 500];

class Adder extends React.Component {
    handleClick = () => {
        this.props.onClickFuncion(this.props.adderValue);
    };

    render() {
        return (
            <button type="button" class="btn btn-success" onClick={this.handleClick}>
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
            <button type="button" class="btn btn-danger" onClick={this.handleClick}>
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
            <div class="container">
                <div id="counterAddButtons" class="btn-group">
                    {this.createAdderButtons()}
                </div>
                <div id="counterResult">
                    <Result counter={this.state.counter} />
                </div>
                <div id="counterSubtractButtons" class="btn-group">
                    {this.createSubtractButtons()}
                </div>
            </div>
        );
    }
}

const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img style={{ width: '150px', objectFit: 'contain' }} src={props.card_image_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.card_name}</div>
                <div>{props.card_effect}</div>
            </div>
        </div>
    );
};

let data = [{
    card_image_url: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_571.png",
    card_name: "Force of Nature",
    card_effect: "Summon three 2/2 Treants."
}, {
    card_image_url: "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_571.png",
    card_name: "Force of Nature",
    card_effect: "Summon three 2/2 Treants."
}
];

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};

ReactDOM.render(<App />, rootElement);
ReactDOM.render(<CardList cards={data} />, rootElement2);