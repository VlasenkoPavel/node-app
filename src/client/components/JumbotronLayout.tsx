import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Header, Props as HeaderProps } from './Header';
import { Jumbotron, Props as JumbotronProps } from './Jumbotron';

const jumbotronState1 = {
    stateNum: 1,
    jumbotronProps: {
        heading: 'Jumbotron state1 heading',
        text: 'Jumbotron in state1',
        buttonProps: {
            classNames: ['btn', 'btn-lg', 'btn-success'],
            title: 'change state'
        }
    }
};

const jumbotronState2 = {
    stateNum: 2,
    jumbotronProps: {
        heading: 'Ops!!!',
        text: 'State has been changed',
        buttonProps: {
            classNames: ['btn', 'btn-lg', 'btn-success'],
            title: 'change state'
        }
    }
};

interface AllProps {
    headerProps: HeaderProps;
}

interface AllState {
    stateNum: number;
    jumbotronProps: JumbotronProps;
}

export class JumbotronLayout extends Component<AllProps, AllState> {
    constructor(props: AllProps) {
        super(props);
        this.state = jumbotronState1;
    }

    public handleOnButtonClick() {
        this.setState(jumbotronState2);
    }

    public shouldComponentUpdate() {
        return confirm('Are your sure?');
    }

    public render() {
        return <div>
            <Header {...this.props.headerProps} />
            <Jumbotron {...this.state.jumbotronProps} />
        </div>;
    }

    public componentDidMount() {
        alert('hello');

        document.addEventListener('JBClick', (e) => {
            let newState;
            this.state.stateNum === 1 ? newState = jumbotronState2 : newState = jumbotronState1;
            this.setState(newState);
        }, false);
    }
}
