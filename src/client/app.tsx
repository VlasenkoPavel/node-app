import './vendors';
import * as React  from 'react';
import { Component }  from 'react';
import { render }  from 'react-dom';
import autobind from 'autobind-decorator';

type cellProps = {
    number: number,
    count: number,
    className: string,
    onClick: (arg: any) => any
}

type CellLineProps = {
    cellNums: number[],
    blackNums: number[],
    lineName: string,
    lastNums: number[],
    onClick: (arg: any) => any,
    getClass: (blackNums: number[], currNum: number, lastNums: number[]) => string
}

type LastProps = {
    blackNums: number[],
    lastNums: number[],
    count: number;
    onClick: (arg: any) => any,
    getClass: (blackNums: number[], currNum: number, lastNums: number[]) => string
}

type AppProps = {
    cellNums: number[],
    blackNums: number[],
}

type State = {
    lastNums: number[];
}

let InitialState: State = {
    lastNums: []
}

const fieldNums = [3,6,9,12,15,18,21,24,27,30,33,36,2,5,8,11,14,17,20,23,26,29,32,35,1,4,7,10,13,16,19,22,25,28,31,34,0];
const whellNums = [5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10];
const blackNums =[10,24,33,20,31,22,29,28,35,26,8,11,13,,6,17,2,4,15]

const Cell = ({ number, count, className, onClick }: cellProps) => 
    <div className={className} onClick={() => {
      
        onClick(number)
    }}>
        <span className="number">
            {number}
        </span>
        <span className="counter">{count}</span>
    </div>

const colorPainter = (blackNums: number[], currNum: number, lastNums: number[]): string => {
    let className = 'cell'
    const getLastNums = (nums: number[], from: number, to: number): number[] => [...nums].reverse().filter((num, ind) => (ind >= from && ind < to));

    if (getLastNums(lastNums, 0, 4).includes(currNum)) {
        className='cell cell_purple'
    } else if(getLastNums(lastNums, 4, 7).includes(currNum)) {
        className='cell cell_yellow'
    } else if(getLastNums(lastNums, 7, 10).includes(currNum)) {
        className='cell cell_blue'
    } else if (blackNums.includes(currNum)) {
        className='cell cell_black'
    } else if (currNum === 0) {
        className='cell cell_green'
    }

    if(currNum === 0) {
        className +=' cell_zero'
    }

    return className
} 

const redBlackGrenpainter = (blackNums: number[], currNum: number, lastNums: number[]): string => {
    let className = 'cell'
    const getLastNums = (nums: number[], from: number, to: number): number[] => [...nums].reverse().filter((num, ind) => (ind >= from && ind < to));

    if (blackNums.includes(currNum)) {
        className='cell cell_black'
    } else if (currNum === 0) {
        className='cell cell_green'
    }

    return className
} 

const CellLine = ({ cellNums, blackNums, lastNums, lineName, onClick, getClass }: CellLineProps) => {
    return <div className ={lineName}>
        {cellNums.map((currNum, index) => {
            const count = lastNums.filter(num => num === currNum).length;
            const className = getClass(blackNums, currNum, lastNums);

            return <Cell key={`firstField${index}`} number={currNum} count={count} className={className} onClick={onClick} />
        })}
    </div>
}

const Wheel = ({cellNums, blackNums, lastNums, onClick, getClass}: CellLineProps) => {
    const blackFieldSet = new Set(blackNums);
    const firstLineNums = cellNums.filter((item, index) => index < 16);
    const secondLineNums = cellNums.filter((item, index) => index > 16 && index < 36).reverse();
    
    return <div className="wheel">
        <CellLine cellNums={firstLineNums} blackNums={blackNums} lastNums={lastNums} onClick={onClick} getClass={getClass} lineName="cell-line" />
        <CellLine cellNums={[10,3]} blackNums={blackNums} lastNums={lastNums} onClick={onClick} getClass={getClass}  lineName="cell-line" />
        <CellLine cellNums={secondLineNums} blackNums={blackNums} lastNums={lastNums} onClick={onClick} getClass={getClass}   lineName="cell-line" />
    </div>
}

const Last = ({blackNums, lastNums, count, onClick, getClass}: LastProps) => {
    const numbers = [...lastNums].reverse().filter((num, index) => index < count);
    
    return <div className="last">
            <CellLine cellNums={numbers} blackNums={blackNums} lastNums={lastNums} onClick={onClick} getClass={getClass} lineName="cell-line" />
    </div>
}

class Layout extends Component<AppProps, State> {
    constructor(props: AppProps) {
      super(props);
      this.state = InitialState;
    }

    @autobind
    public addNumber(number: number) {
        const lastNums = [...this.state.lastNums, number];
        this.setState({lastNums});
    }

    public getLastNums(count: number): number[] {
        const lastNums = this.state.lastNums.filter((num, index) => index <= this.state.lastNums.length && index >= (this.state.lastNums.length - count));

        return lastNums
    }
  
    render() {
        return <React.Fragment>
            <div className="field">
                <CellLine cellNums={fieldNums} blackNums={blackNums} lastNums={this.getLastNums(10)} onClick={this.addNumber} getClass={colorPainter} lineName={'cell-line'}/>
            </div>
            <Wheel cellNums={whellNums} blackNums={blackNums} lastNums={this.getLastNums(10)} onClick={f=>f} getClass={colorPainter} lineName={'cell-line'}/>
            <Last blackNums={blackNums} lastNums={this.getLastNums(10)} count={10} onClick={f=>f} getClass={redBlackGrenpainter}/>
        </React.Fragment>
    }
  }


const app = document.getElementById('root');

render(
    <Layout cellNums={whellNums} blackNums={[3,5,7]} /> , app
);
