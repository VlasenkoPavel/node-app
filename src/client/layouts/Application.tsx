import * as React  from 'react';
import { Component }  from 'react';
import { Header, Props as HeaderProps }  from '../components/Header';
import { Main }  from '../components/Main';

export interface Props {
    headerProps: HeaderProps;
}

export interface State {
}

export class Application extends Component<Props, State> {
    render():any { 
        return(
            <div>
                <Header {...this.props.headerProps} /> 
                <Main />
            </div>
        )
    }
}

