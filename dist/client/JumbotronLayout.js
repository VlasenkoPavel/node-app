"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const JumbotronHeader_1 = require("./JumbotronHeader");
class JumbotronLayout extends react_1.Component {
    render() {
        return React.createElement(JumbotronHeader_1.JumbotronHeader, { title: 'Project name', navItems: ['home', 'about', 'contacts'] });
    }
}
exports.JumbotronLayout = JumbotronLayout;
