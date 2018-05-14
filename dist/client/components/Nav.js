"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
// const NavItem = (props: ItemProps) => (<li role="presentation" className="nav-item active"><a href="#">{props.title}</a></li>);
let a = "asdasd";
const NavItem = (props) => (React.createElement("li", { role: "presentation", className: "nav-item active" },
    React.createElement(react_router_dom_1.Link, { to: `${props.title}` }, props.title)));
class Nav extends react_1.Component {
    render() {
        const items = this.props.items.map((item, index) => React.createElement(NavItem, { title: item, key: index }));
        return React.createElement("nav", null,
            React.createElement("ul", { className: "nav nav-pills pull-right" }, items));
    }
}
exports.Nav = Nav;
