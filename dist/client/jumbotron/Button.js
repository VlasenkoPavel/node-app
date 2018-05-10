"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
class Button extends react_1.Component {
    handleClick() {
        const event = document.createEvent('Event');
        event.initEvent('JBClick', true, true);
        document.dispatchEvent(event);
    }
    render() {
        const classNames = this.props.classNames.join(" ");
        return React.createElement("a", { id: "jumboButton", className: classNames, href: "#", role: "button", onClick: this.handleClick }, this.props.title);
    }
}
exports.Button = Button;
