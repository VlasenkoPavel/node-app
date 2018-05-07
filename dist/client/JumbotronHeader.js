"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const JumbotronNav_1 = require("./JumbotronNav");
class JumbotronHeader extends react_1.Component {
    render() {
        return React.createElement("div", { className: "header clearfix" },
            React.createElement("h3", { className: "text-muted" }, this.props.title),
            React.createElement(JumbotronNav_1.JumbotronNav, { items: this.props.navItems }));
    }
}
exports.JumbotronHeader = JumbotronHeader;
