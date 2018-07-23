import './vendors';
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Application } from './layouts/Application';

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

