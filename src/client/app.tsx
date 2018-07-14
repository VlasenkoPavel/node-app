import './vendors';
import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, BrowserRouter } from 'react-router-dom';

import { Application, Props as AppProps, State as AppState } from './layouts/Application';

const Props = {
    headerProps: {
        title: 'Project name',
        navItems: ['home', 'about']
    }
};

const app = document.getElementById('root');

render(
    <BrowserRouter>
        <Application {...Props} />
    </BrowserRouter>, app
);
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
