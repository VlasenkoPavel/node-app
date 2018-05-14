"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const Header_1 = require("./Header");
const Jumbotron_1 = require("./Jumbotron");
const jumbotronState1 = {
    stateNum: 1,
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
    stateNum: 2,
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
    shouldComponentUpdate() {
        return confirm('Are your sure?');
    }
    render() {
        return React.createElement("div", null,
            React.createElement(Header_1.Header, Object.assign({}, this.props.headerProps)),
            React.createElement(Jumbotron_1.Jumbotron, Object.assign({}, this.state.jumbotronProps)));
    }
    componentDidMount() {
        alert('hello');
        document.addEventListener('JBClick', (e) => {
            let newState;
            this.state.stateNum === 1 ? newState = jumbotronState2 : newState = jumbotronState1;
            this.setState(newState);
        }, false);
    }
}
exports.JumbotronLayout = JumbotronLayout;
