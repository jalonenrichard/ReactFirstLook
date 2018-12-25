import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};

class SearchForm extends React.Component {
    state = { userTypedCardName: '' };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event from submit. Value: ', this.state.userTypedCardName);

        axios({
            mehtod: 'get',
            //url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${this.state.userTypedCardName}`,
            url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/${this.state.userTypedCardName}`,
            headers: { 'X-Mashape-Key': 'ymp1iOVLFAmsh4ws64FZBzJeaBPMp1qJT2bjsnUZ5UJU1PtxLx' }
        })
            .then(resp => {
                console.log(resp);
                //let i;
                //for (let i = 0; i < resp.data.length; i++) {
                if (resp.data[0].imgGold == null)
                    var card = { card_image_url: "https://via.placeholder.com/150", card_name: resp.data[0].name, card_effect: resp.data[0].text };
                else
                    var card = { card_image_url: resp.data[0].imgGold, card_name: resp.data[0].name, card_effect: resp.data[0].text };
                this.props.onSubmit(card);
                this.setState({ userTypedCardName: '' });
                //}
                /* var card = { card_image_url: resp.data[0].img, card_name: resp.data[0].name, card_effect: resp.data[0].text };
                this.props.onSubmit(card); */
            });
    };

    render() {
        return (
            <form class="form-inline" onSubmit={this.handleSubmit}>
                <input id="hsAppInputField"
                    //ref={(userTypedCardName) => this.hsCardNameInput = userTypedCardName}
                    value={this.state.userTypedCardName}
                    onChange={(event) => this.setState({ userTypedCardName: event.target.value })}
                    class="form-control" type="text" placeholder="Card name" required />
                <button id="hsAppSubmitButton" class="btn btn-info" type="submit">Add</button>
            </form>
        );
    }
}

class HsApp extends React.Component {
    state = {
        cards: [

        ]
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    }

    render() {
        return (
            <div>
                <SearchForm onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, rootElement);
ReactDOM.render(<HsApp />, rootElement2);