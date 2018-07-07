"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./vendors");
const React = require("react");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
let InitialState = {
    lastNums: []
};
const fieldNums = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 0];
const whellNums = [5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10];
const blackNums = [10, 24, 33, 20, 31, 22, 29, 28, 35, 26, 8, 11, 13, , 6, 17, 2, 4, 15];
const Cell = ({ number, count, className, onClick }) => React.createElement("div", { className: className, onClick: () => {
        onClick(number);
    } },
    React.createElement("span", { className: "number" }, number),
    React.createElement("span", { className: "counter" }, count));
const colorPainter = (blackNums, currNum, lastNums) => {
    let className = 'cell';
    const getLastNums = (nums, from, to) => [...nums].reverse().filter((num, ind) => (ind >= from && ind < to));
    if (getLastNums(lastNums, 0, 4).includes(currNum)) {
        className = 'cell cell_purple';
    }
    else if (getLastNums(lastNums, 4, 7).includes(currNum)) {
        className = 'cell cell_yellow';
    }
    else if (getLastNums(lastNums, 7, 10).includes(currNum)) {
        className = 'cell cell_blue';
    }
    else if (blackNums.includes(currNum)) {
        className = 'cell cell_black';
    }
    else if (currNum === 0) {
        className = 'cell cell_green';
    }
    if (currNum === 0) {
        className += ' cell_zero';
    }
    return className;
};
const redBlackGrenpainter = (blackNums, currNum, lastNums) => {
    let className = 'cell';
    const getLastNums = (nums, from, to) => [...nums].reverse().filter((num, ind) => (ind >= from && ind < to));
    if (blackNums.includes(currNum)) {
        className = 'cell cell_black';
    }
    else if (currNum === 0) {
        className = 'cell cell_green';
    }
    return className;
};
const CellLine = ({ cellNums, blackNums, lastNums, lineName, onClick, getClass }) => {
    return React.createElement("div", { className: lineName }, cellNums.map((currNum, index) => {
        const count = lastNums.filter(num => num === currNum).length;
        const className = getClass(blackNums, currNum, lastNums);
        return React.createElement(Cell, { key: `firstField${index}`, number: currNum, count: count, className: className, onClick: onClick });
    }));
};
const Wheel = ({ cellNums, blackNums, lastNums, onClick, getClass }) => {
    const blackFieldSet = new Set(blackNums);
    const firstLineNums = cellNums.filter((item, index) => index < 16);
    const secondLineNums = cellNums.filter((item, index) => index > 16 && index < 36).reverse();
    return React.createElement("div", { className: "wheel" },
        React.createElement(CellLine, { cellNums: firstLineNums, blackNums: blackNums, lastNums: lastNums, onClick: onClick, getClass: getClass, lineName: "cell-line" }),
        React.createElement("div", { className: "cell-line" },
            React.createElement(CellLine, { cellNums: [10], blackNums: blackNums, lastNums: lastNums, onClick: onClick, getClass: getClass, lineName: "single-cell" }),
            React.createElement(CellLine, { cellNums: [3], blackNums: blackNums, lastNums: lastNums, onClick: onClick, getClass: getClass, lineName: "single-cell" })),
        React.createElement(CellLine, { cellNums: secondLineNums, blackNums: blackNums, lastNums: lastNums, onClick: onClick, getClass: getClass, lineName: "cell-line" }));
};
const Last = ({ blackNums, lastNums, count, onClick, getClass }) => {
    const blackFieldSet = new Set(blackNums);
    const blackNumbers = [...lastNums].reverse().filter((num, index) => blackFieldSet.has(num) && index < count);
    const notblackNums = [...lastNums].reverse().filter((num, index) => !blackFieldSet.has(num) && index < count);
    return React.createElement("div", { className: "last" },
        React.createElement("div", { className: "cell-column" },
            React.createElement(CellLine, { cellNums: blackNumbers, blackNums: blackNums, lastNums: lastNums, onClick: onClick, getClass: getClass, lineName: "single-cell" })),
        React.createElement("div", { className: "cell-column" },
            React.createElement(CellLine, { cellNums: notblackNums, blackNums: blackNums, lastNums: lastNums, onClick: onClick, getClass: getClass, lineName: "single-cell" })));
};
class Layout extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = InitialState;
        this.addNumber = this.addNumber.bind(this);
        this.setState.bind(this);
    }
    addNumber(number) {
        const lastNums = [...this.state.lastNums, number];
        this.setState({ lastNums });
    }
    render() {
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: "field" },
                React.createElement(CellLine, { cellNums: fieldNums, blackNums: blackNums, lastNums: this.state.lastNums, onClick: this.addNumber, getClass: colorPainter, lineName: 'cell-line' })),
            React.createElement(Wheel, { cellNums: whellNums, blackNums: blackNums, lastNums: this.state.lastNums, onClick: f => f, getClass: redBlackGrenpainter, lineName: 'cell-line' }),
            React.createElement(Last, { blackNums: blackNums, lastNums: this.state.lastNums, count: 10, onClick: f => f, getClass: redBlackGrenpainter }));
    }
}
const app = document.getElementById('root');
if ((new Date).getTime() < 1531402200000) {
    react_dom_1.render(React.createElement(Layout, { cellNums: whellNums, blackNums: [3, 5, 7], onClick: f => f }), app);
}
else {
    react_dom_1.render(React.createElement("p", null, "test period finished"), app);
}
