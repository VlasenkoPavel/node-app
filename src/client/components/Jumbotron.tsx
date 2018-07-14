import * as React from 'react';
import { Component } from 'react';
import { Button, Props as ButtonProps } from './Button';


export type Props = {
    heading: string;
    text: string;
    buttonProps: ButtonProps;
};

export class Jumbotron extends Component<Props> {
    public render(): any {
        return <div className="jumbotron">
            <h1>{this.props.heading}</h1>
            <p className="lead">{this.props.text}</p>
            <p>
                <Button {...this.props.buttonProps} />
            </p>
        </div>;
    }
}
