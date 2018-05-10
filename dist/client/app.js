"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./vendors");
const React = require("react");
const react_dom_1 = require("react-dom");
const JumbotronLayout_1 = require("./jumbotron/JumbotronLayout");
const jumbotronProps = {
    headerProps: {
        title: 'Project name',
        navItems: ['home', 'about', 'contacts']
    }
};
react_dom_1.render(React.createElement(JumbotronLayout_1.JumbotronLayout, Object.assign({}, jumbotronProps)), document.getElementById('root'));
