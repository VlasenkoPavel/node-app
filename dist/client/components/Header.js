"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const Nav_1 = require("./Nav");
class Header extends react_1.Component {
    render() {
        return (React.createElement("div", { className: "header clearfix" },
            React.createElement("h3", { className: "text-muted" }, this.props.title),
            React.createElement(Nav_1.Nav, { items: this.props.navItems })));
    }
}
exports.Header = Header;
