import * as React  from 'react';

interface IWatchProps {}

interface IWatchState {
    time: string
}
  
export class Watch extends React.Component<IWatchProps, IWatchState> {
    constructor(props: IWatchProps) {
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString()
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            time: new Date().toLocaleTimeString()
        }));
    }

    render() {
        return (
            <div>
            <h1>{this.state.time}</h1>
            <button onClick={this.handleClick}>
                get time
            </button>
            </div>
        );
    }
}