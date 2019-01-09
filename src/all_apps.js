import React from 'react';
import UserGenerator from './username_generator';
import CounterApp from './counter';
import HsApp from './hs_api';
import Game from './tictactoe';

class AllApps extends React.Component {
    state = {
        allApps: [
            <UserGenerator />,
            <Game />,
            <CounterApp />,
            <HsApp />
        ]
    };
    render() {
        return (
            <div>
                {this.state.allApps}
            </div>
        );
    }
}

export default AllApps;