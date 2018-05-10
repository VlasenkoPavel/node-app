"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const Button_1 = require("./Button");
class Jumbotron extends react_1.Component {
    render() {
        return React.createElement("div", { className: "jumbotron" },
            React.createElement("h1", null, this.props.heading),
            React.createElement("p", { className: "lead" }, this.props.text),
            React.createElement("p", null,
                React.createElement(Button_1.Button, Object.assign({}, this.props.buttonProps))));
    }
}
exports.Jumbotron = Jumbotron;
