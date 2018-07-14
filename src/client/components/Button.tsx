import * as React from 'react';
import { Component } from 'react';

export type Props = {
    classNames: string[];
    title: string;
};

export class Button extends Component<Props> {
    public handleClick() {
        const event = document.createEvent('Event');
        event.initEvent('JBClick', true, true);
        document.dispatchEvent(event);
    }

    public render(): any {
        const classNames = this.props.classNames.join(' ');
        return <a
            id="jumboButton"
            className={classNames}
            href="#" role="button"
            onClick={this.handleClick}>
            {this.props.title}
        </a>;
    }
}
