"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const NavItem = (props) => (React.createElement("li", { role: "presentation", className: "active" },
    React.createElement("a", { href: "#" }, props.title)));
class JumbotronNav extends react_1.Component {
    render() {
        const items = this.props.items.map((item, index) => React.createElement(NavItem, { title: item, key: index }));
        return React.createElement("nav", null,
            React.createElement("ul", { className: "nav nav-pills pull-right" }, items));
    }
}
exports.JumbotronNav = JumbotronNav;
