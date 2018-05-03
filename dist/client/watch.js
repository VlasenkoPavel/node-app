"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Watch extends React.Component {
    constructor(props) {
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
        return (React.createElement("div", null,
            React.createElement("h1", null, this.state.time),
            React.createElement("button", { onClick: this.handleClick }, "get time")));
    }
}
exports.Watch = Watch;
