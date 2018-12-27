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

class CounterApp extends React.Component {
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
            <div class="row">
                <div class="col-sm-12">
                    <div class="card mb-12 box-shadow">
                        <h5 class="card-header">Counter</h5>
                        <div id="counter" class="card-body">
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
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CounterApp;