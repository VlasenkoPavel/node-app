import * as React from 'react';
import { Component } from 'react';
import { Nav } from './Nav';

export type Props = {
    navItems: string[],
    title: string
};

export class Header extends Component<Props> {
    public render() {
        return (
            <div className="header clearfix">
                <h3 className="text-muted">{this.props.title}</h3>
                <Nav items={this.props.navItems} />
            </div>
        );
    }
}
