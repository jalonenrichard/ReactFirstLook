import React from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';

////////// HS API APP //////////

const Card = (props) => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-4">
                    <img style={{ width: '150px', objectFit: 'contain' }} src={props.card_image_url} onError={(e) => { e.target.src = require('./images/Card_back-Default.png'); e.target.width = '100px' }} alt="[Card art not found.]" />
                </div>
                <div className="col-8">
                    <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.card_name}</div>
                    <div id="cardEffectDiv">
                        {renderHTML(props.card_effect)}
                    </div>
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
        try {
            axios({
                mehtod: 'get',
                //url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${this.state.userTypedCardName}?collectible=1`,
                url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/${this.state.userTypedCardName}?collectible=1`,
                headers: { 'X-Mashape-Key': 'ymp1iOVLFAmsh4ws64FZBzJeaBPMp1qJT2bjsnUZ5UJU1PtxLx' }
            })
                .then(resp => {
                    console.log(resp);
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
        } catch {

        }
    };

    render() {
        return (
            <form className="form-inline" style={{ marginBottom: '2em' }} onSubmit={this.handleSubmit}>
                <input id="hsAppInputField"
                    //ref={(userTypedCardName) => this.hsCardNameInput = userTypedCardName}
                    value={this.state.userTypedCardName}
                    onChange={(event) => this.setState({ userTypedCardName: event.target.value })}
                    className="form-control" type="text" placeholder="Card name" required />
                <button id="hsAppSubmitButton" className="btn btn-info submit-button" type="submit">Add</button>
            </form>
        );
    }
}

class HsApp extends React.Component {
    state = {
        cards: [

        ],
        description_text: "Search Hearthstone cards by name. Example value: Voidwalker. NB! Still buggy, may crash."
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-8 box-shadow">
                        <div className="card-body">
                            <h4 className="card-title">Hearthstone API Card Search</h4>
                            <h6 className="card-subtitle mb-2 text-muted">{this.state.description_text}</h6>
                            <SearchForm onSubmit={this.addNewCard} />
                            <CardList cards={this.state.cards} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HsApp;