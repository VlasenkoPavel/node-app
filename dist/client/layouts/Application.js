"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const Header_1 = require("../components/Header");
const Main_1 = require("../components/Main");
class Application extends react_1.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, Object.assign({}, this.props.headerProps)),
            React.createElement(Main_1.Main, null)));
    }
}
exports.Application = Application;
