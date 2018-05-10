"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
class Button extends react_1.Component {
    render() {
        const classNames = this.props.classNames.join(" ");
        return React.createElement("a", { className: classNames, href: "#", role: "button" }, this.props.title);
    }
}
exports.Button = Button;
