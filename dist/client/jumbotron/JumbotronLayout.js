"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const JumbotronHeader_1 = require("./JumbotronHeader");
const Jumbotron_1 = require("./Jumbotron");
const jumbotronState1 = {
    jumbotronProps: {
        heading: "Jumbotron state1 heading",
        text: "Jumbotron in state1",
        buttonProps: {
            classNames: ["btn", "btn-lg", "btn-success"],
            title: "change state"
        }
    }
};
const jumbotronState2 = {
    jumbotronProps: {
        heading: "Ops!!!",
        text: "State has been changed",
        buttonProps: {
            classNames: ["btn", "btn-lg", "btn-success"],
            title: "change state"
        }
    }
};
class JumbotronLayout extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = jumbotronState1;
    }
    handleOnButtonClick() {
        this.setState(jumbotronState2);
    }
    render() {
        return React.createElement("div", null,
            React.createElement(JumbotronHeader_1.JumbotronHeader, Object.assign({}, this.props.headerProps)),
            React.createElement(Jumbotron_1.Jumbotron, Object.assign({}, this.state.jumbotronProps)));
    }
    componentDidMount() {
        alert('hello');
        document.addEventListener('JBClick', (e) => this.setState(jumbotronState2), false);
    }
}
exports.JumbotronLayout = JumbotronLayout;
