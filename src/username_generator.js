import React from 'react';
import Sentencer from 'sentencer';

////////// Username Generator App //////////

class UserGenerator extends React.Component {
    state = {
        username: GenerateRandomUsername(),
        description_text: "React app for generating usernames when lacking ideas. Just hit the 'Generate' button."
    };

    render() {
        return (
            <div class="row">
                <div class="col-md-8" id="username_col">
                    <div class="card mb-8 box-shadow">
                        <div id="username_generator" class="card-body">
                            <h4 class="card-title">Username Generator</h4>
                            <h6 class="card-subtitle mb-2 text-muted">{this.state.description_text}</h6>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" value={this.state.username} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-info" type="button" type="submit"
                                        onClick={() => {
                                            this.setState({ username: GenerateRandomUsername() });
                                        }}>
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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