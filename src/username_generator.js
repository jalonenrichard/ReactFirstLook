import React from 'react';
import Sentencer from 'sentencer';

////////// Username Generator App //////////

class UserGenerator extends React.Component {
    state = { text: GenerateRandomUsername() };

    render() {
        return (
            <div class="input-group mb-3">
                <input type="text" class="form-control" value={this.state.text} />
                <div class="input-group-append">
                    <button class="btn btn-outline-info" type="button" type="submit" onClick={() => {
                        //username = GenerateRandomUsername();
                        this.setState({ text: GenerateRandomUsername() });
                    }}>Generate</button>
                </div>
            </div>
        );
    }
}

function GenerateRandomUsername() {
    let adjective = Capitalize(Sentencer.make("{{adjective}}"));
    let noun = Capitalize(Sentencer.make("{{noun}}"));
    let result = adjective + noun;
    return result;
}

function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default UserGenerator;