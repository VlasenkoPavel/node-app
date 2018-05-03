import * as React  from 'react';
import * as ReactDOM  from 'react-dom';
import { Watch } from './watch';

const time = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
);

interface IAppProps {
    name: string
    className: string
}

class App extends React.Component<IAppProps> {
    render()
    {
        return <div className={this.props.className}>
            <h1>Hello {this.props.name}!</h1>
            <div id='wrapper'></div>
        </div>;
    }
}

ReactDOM.render(<App name="Bill" className="test_class"/>, document.getElementById('root'));
ReactDOM.render(<Watch/>, document.getElementById('wrapper'));
