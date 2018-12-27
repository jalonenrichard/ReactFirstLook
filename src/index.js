import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import renderHTML from 'react-render-html';
//import CardList from './hsApi';
//var React = require('react');
//var ReactDOM = require('react-dom');

const addButonText = '+';
const subtractButtonText = '-';
const counterRoot = document.getElementById("counter");
const hsApiRoot = document.getElementById("hsApi");
const expenseApiRoot = document.getElementById("expenses");
const values = [1, 5, 10, 50, 100, 500];

////////// Counter App //////////

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


////////// HS API APP //////////
const Card = (props) => {
    //let cardeffect = props.card_effect.split('/n').map(line => <p>{line}</p>);
    //let cardeffect = renderHTML(cardeffect);
    //cardeffect = reactStringReplace(cardeffect, /(\n)/g, () => <br />);
    //cardeffect
    /* cardeffect = cardeffect.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
    }); */
    return (
        <div class="container">
            <div class="row align-items-center">
                <div class="col-4">
                    <img style={{ width: '150px', objectFit: 'contain' }} src={props.card_image_url} />
                </div>
                <div class="col-8">
                    <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.card_name}</div>
                    <div id="cardEffectDiv">{renderHTML(props.card_effect)}</div>
                </div>
            </div>
        </div>

    );
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.card_id} {...card} />)}
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
            url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${this.state.userTypedCardName}?collectible=1`,
            //url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/${this.state.userTypedCardName}`,
            headers: { 'X-Mashape-Key': 'ymp1iOVLFAmsh4ws64FZBzJeaBPMp1qJT2bjsnUZ5UJU1PtxLx' }
        })
            .then(resp => {
                console.log(resp);
                //let i;
                for (let i = 0; i < resp.data.length; i++) {
                    if (resp.data[i].imgGold == null)
                        var card = { card_id: resp.data[i].cardId, card_image_url: "https://via.placeholder.com/150", card_name: resp.data[i].name, card_effect: resp.data[i].text };
                    else
                        var card = { card_id: resp.data[i].cardId, card_image_url: resp.data[i].imgGold, card_name: resp.data[i].name, card_effect: resp.data[i].text };
                    this.props.onSubmit(card);

                }
                this.setState({ userTypedCardName: '' });
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
                <button id="hsAppSubmitButton" class="btn btn-info submit-button" type="submit">Add</button>
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

////////// Expense Api App //////////

//http://localhost:8080/api/v1/expenses - all expenses
//http://localhost:8080/api/v1/expenses/{id} - specific expense

class ExpenseTable extends React.Component {
    render() {
        return (
            <form class="form-inline" onSubmit={this.handleSubmit}>
                <input
                    id="expenseInput"
                    class="form-control"
                    type="text"
                    placeholder="Expense ID"
                />
                <button id="expenseSubmit" class="btn btn-info submit-button" type="submit">Search</button>
            </form>
        );
    }
}

ReactDOM.render(<App />, counterRoot);
ReactDOM.render(<HsApp />, hsApiRoot);
ReactDOM.render(<ExpenseTable />, expenseApiRoot)