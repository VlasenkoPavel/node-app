"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const pages_1 = require("../pages");
class Main extends react_1.Component {
    render() {
        return (React.createElement("main", null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: pages_1.Home }),
                React.createElement(react_router_dom_1.Route, { path: '/home', component: pages_1.Home }),
                React.createElement(react_router_dom_1.Route, { path: '/about', component: pages_1.About }))));
    }
}
exports.Main = Main;
