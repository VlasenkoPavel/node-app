"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./vendors");
const React = require("react");
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const Application_1 = require("./layouts/Application");
const Props = {
    headerProps: {
        title: 'Project name',
        navItems: ['home', 'about']
    }
};
const app = document.getElementById('root');
react_dom_1.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(Application_1.Application, Object.assign({}, Props))), app);
// render(
//     <Router history={browserHistory}>
//         <Route path="/" component={JumbotronLayout}>
//             <Route exact component={Main} />
//             <Route path="users" component={Users} />
//             <Route path="*" component={PageNotFound} />
//         </Route>
//     </Router>, app
// );
// import './vendors';
// import * as React  from 'react';
// import { Component }  from 'react';
// import { render }  from 'react-dom';
// import { JumbotronLayout }  from './jumbotron/JumbotronLayout';
// const jumbotronProps = {
//     headerProps: {
//         title:'Project name',
//         navItems: ['home', 'about', 'contacts']
//     }
// }
// render(<JumbotronLayout {...jumbotronProps}/>, document.getElementById('root'));
