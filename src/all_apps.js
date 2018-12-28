import React from 'react';
import UserGenerator from './username_generator';
import HsApp from './hs_api';
import CounterApp from './counter';

class AllApps extends React.Component {
    state = {
        allApps: [
            <UserGenerator />,
            <CounterApp />,
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