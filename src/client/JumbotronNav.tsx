import * as React  from 'react';
import { Component }  from 'react';

interface INavItems {
    items: string[]
}
interface ItemProps {
    title: string
}

const NavItem = (props: ItemProps) => (<li role="presentation" className="active"><a href="#">{props.title}</a></li>);

export class JumbotronNav extends Component<INavItems> {
    render(): any {
        const items = this.props.items.map((item, index) => <NavItem title={item} key={index}/>);
    return <nav>
        <ul className="nav nav-pills pull-right">
            {items}
        </ul>
      </nav>
    }
}