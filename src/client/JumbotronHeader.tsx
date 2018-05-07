import * as React  from 'react';
import { Component }  from 'react';
import { JumbotronNav }  from './JumbotronNav';

interface IHeaderProps {
    navItems: string[],
    title: string
}

export class JumbotronHeader extends Component<IHeaderProps> {
    render()
    {
        return <div className="header clearfix">
          <h3 className="text-muted">{this.props.title}</h3>
          <JumbotronNav items={this.props.navItems}/>
        </div>
    }
}