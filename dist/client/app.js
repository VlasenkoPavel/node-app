"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const watch_1 = require("./watch");
const time = (React.createElement("div", null,
    React.createElement("h2", null,
        "It is ",
        new Date().toLocaleTimeString(),
        ".")));
class App extends React.Component {
    render() {
        return React.createElement("div", { className: this.props.className },
            React.createElement("h1", null,
                "Hello ",
                this.props.name,
                "!"),
            React.createElement("div", { id: 'wrapper' }));
    }
}
ReactDOM.render(React.createElement(App, { name: "Bill", className: "test_class" }), document.getElementById('root'));
ReactDOM.render(React.createElement(watch_1.Watch, null), document.getElementById('wrapper'));
