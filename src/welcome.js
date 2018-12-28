import React from 'react';

class Welcome extends React.Component {
    state = {
        headers: {
            whoHeader: "Who?",
            whatHeader: "What?",
            whyHeader: "Why?",
            informationSources: "Useful links",
        },
        paragraphs: {
            whoParagraph: "Richard Jalonen",
            whatParagraph: "First look at React, a personal website created using React and JS. The website is going to consist of multiple small apps, all created with React.",
            whyParagraph: "For learning purposes only. Need to learn React for a future work project.",
            pluralsightInformation: "Pluralsight video course for the very basics: ",
            zeitInformation: "Continuous deployment using Zeit - automatically deploys this website each time i commit to GitHub: ",
            navBarInformation: "ReactStrap information - used for creating React navigation bars: ",
        },
        links: {
            pluralsightLink: "https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents",
            pluralsight: "Pluralsight",
            zeitLink: "https://zeit.co/",
            zeit: "Zeit",
            navBarLink: "https://reactstrap.github.io/components/navbar/",
            navBar: "ReactStrap",
        },
    };
    render() {
        return (
            <div>

                <div class="welcomeDiv">
                    <h3>{this.state.headers.whoHeader}</h3>
                    <p>{this.state.paragraphs.whoParagraph}</p>
                </div>

                <div class="welcomeDiv">
                    <h3>{this.state.headers.whatHeader}</h3>
                    <p>{this.state.paragraphs.whatParagraph}</p>
                </div>

                <div class="welcomeDiv">
                    <h3>{this.state.headers.whyHeader}</h3>
                    <p>{this.state.paragraphs.whyParagraph}</p>
                </div>

                <div class="welcomeDiv">
                    <h3>{this.state.headers.informationSources}</h3>
                    <p>
                        <div class="linkDiv">
                            {this.state.paragraphs.pluralsightInformation}
                            <br />
                            <a href={'' + this.state.links.pluralsightLink} target="_blank">
                                {this.state.links.pluralsight}
                            </a>
                            <br />
                        </div>
                        <div class="linkDiv">
                            {this.state.paragraphs.zeitInformation}
                            <br />
                            <a href={'' + this.state.links.zeitLink} target="_blank">
                                {this.state.links.zeit}
                            </a>
                            <br />
                        </div>
                        <div class="linkDiv">
                            {this.state.paragraphs.navBarInformation}
                            <br />
                            <a href={'' + this.state.links.navBarLink} target="_blank">
                                {this.state.links.navBar}
                            </a>
                            <br />
                        </div>
                    </p>
                </div>

            </div>
        );
    }
}

export default Welcome;