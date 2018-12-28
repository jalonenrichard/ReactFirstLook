import React from 'react';

////////// Counter App //////////

const addButonText = '+';
const subtractButtonText = '-';
const values = [1, 5, 10, 50, 100, 500];

class Adder extends React.Component {
    handleClick = () => {
        this.props.onClickFuncion(this.props.adderValue);
    };

    render() {
        return (
            <button type="button" className="btn btn-success" onClick={this.handleClick}>
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
            <button type="button" className="btn btn-danger" onClick={this.handleClick}>
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

class CounterApp extends React.Component {
    state = {
        counter: 0,
        description_text: "Very first app that simply changes a text value based on button clicks."
    };

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
                <Adder key={i.toString()} adderValue={values[i]} onClickFuncion={this.add} />
            )
        }
        return adders
    }

    createSubtractButtons = () => {
        let subtracters = []

        for (let i = 0; i < values.length; i++) {
            subtracters.push(
                <Subtracter key={i.toString()} subtracterValue={values[i]} onClickFuncion={this.subtract} />
            )
        }
        return subtracters
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-8 box-shadow text-center">
                        <div id="counter" className="card-body">
                            <h4 className="card-title">Counter</h4>
                            <h6 className="card-subtitle mb-2 text-muted">{this.state.description_text}</h6>
                            <div className="container">
                                <div id="counterAddButtons" className="btn-group">
                                    {this.createAdderButtons()}
                                </div>
                                <div id="counterResult">
                                    <Result counter={this.state.counter} />
                                </div>
                                <div id="counterSubtractButtons" className="btn-group">
                                    {this.createSubtractButtons()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CounterApp;