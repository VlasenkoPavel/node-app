import * as React  from 'react';
import { Component }  from 'react';
import { render }  from 'react-dom';
import { JumbotronHeader }  from './JumbotronHeader';

export class JumbotronLayout extends Component {
    render()
    {
        return <JumbotronHeader title='Project name' navItems={['home', 'about', 'contacts']} />
    }
}
