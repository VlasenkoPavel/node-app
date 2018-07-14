import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

type NavItems = {
    items: string[];
};

type ItemProps = {
    title: string;
};

// const NavItem = (props: ItemProps) => (
//     <li role="presentation" className="nav-item active"><a href="#">{props.title}</a></li>
// );

const NavItem = (props: ItemProps) => (
    <li role="presentation" className="nav-item active"><Link to={`${props.title}`}>{props.title}</Link></li>
);

export class Nav extends Component<NavItems> {
    public render(): any {
        const items = this.props.items.map((item, index) => <NavItem title={item} key={index} />);

        return (
            <nav>
                <ul className="nav nav-pills pull-right">
                    {items}
                </ul>
            </nav>
        );
    }
}
