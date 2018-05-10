import * as React  from 'react';
import { Component }  from 'react';
import { render }  from 'react-dom';
import { JumbotronHeader, Props as HeaderProps }  from './JumbotronHeader';
import { Jumbotron, Props as JumbotronProps }  from './Jumbotron';

const jumbotronState1 = {
    jumbotronProps: {
        heading: "Jumbotron state1 heading",
        text: "Jumbotron in state1",
        buttonProps:   {
            classNames: ["btn", "btn-lg", "btn-success"],
            title: "change state"
        } 
    }
}

const jumbotronState2 = {
    jumbotronProps: {
        heading: "Ops!!!",
        text: "State has been changed",
        buttonProps:   {
            classNames: ["btn", "btn-lg", "btn-success"],
            title: "change state"
        } 
    }
}

interface AllProps {
    headerProps: HeaderProps;
}
interface AllState {
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
    
    render() {
        return <div>
            <JumbotronHeader {...this.props.headerProps} />
            <Jumbotron {...this.state.jumbotronProps} />
        </div>
    }

    componentDidMount() {
        alert('hello');
        document.addEventListener('JBClick', (e) => this.setState(jumbotronState2), false);
    }
}
