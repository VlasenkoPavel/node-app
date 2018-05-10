import './vendors';
import * as React  from 'react';
import { Component }  from 'react';
import { render }  from 'react-dom';
import { JumbotronLayout }  from './jumbotron/JumbotronLayout';

const jumbotronProps = {
    headerProps: {
        title:'Project name',
        navItems: ['home', 'about', 'contacts']
    }
}


render(<JumbotronLayout {...jumbotronProps}/>, document.getElementById('root'));