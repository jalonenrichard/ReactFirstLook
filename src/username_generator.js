import React from 'react';
import Sentencer from 'sentencer';
import CopyToClipboard from 'react-copy-to-clipboard';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

////////// Username Generator App //////////

class UserGenerator extends React.Component {
    state = {
        username: GenerateRandomUsername(),
        description_text: "React app for generating usernames when lacking ideas. Just hit the 'Generate' button.",
        copied: false
    };
    onCopy = () => {
        this.setState({ copied: true });
    };
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Text copied to clipboard', 'Copied', 1200);
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };
    render() {
        return (
            <div className="row">
                <div className="col-md-8" id="username_col">
                    <div className="card mb-8 box-shadow">
                        <div id="username_generator" className="card-body">
                            <h4 className="card-title">Username Generator</h4>
                            <h6 className="card-subtitle mb-2 text-muted">{this.state.description_text}</h6>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="usernameInput" value={this.state.username} readOnly />
                                <div className="input-group-append">
                                    <CopyToClipboard onCopy={this.onCopy} text={this.state.username}>
                                        <button className="btn btn-outline-info" type="button" onClick={this.createNotification('success')}>
                                            Copy
                                        </button>
                                    </CopyToClipboard>
                                    <button className="btn btn-outline-info" type="button"
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
                <NotificationContainer />
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