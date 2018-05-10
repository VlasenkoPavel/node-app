import * as React  from 'react';
import { Component }  from 'react';

type NavItems = {
    items: string[];
}

type ItemProps = {
    title: string;
}

const NavItem = (props: ItemProps) => (<li role="presentation" className="nav-item active"><a href="#">{props.title}</a></li>);

export class JumbotronNav extends Component<NavItems> {
    render(): any {
        const items = this.props.items.map((item, index) => <NavItem title={item} key={index}/>);
    return <nav>
        <ul className="nav nav-pills pull-right">
            {items}
        </ul>
      </nav>
    }
}