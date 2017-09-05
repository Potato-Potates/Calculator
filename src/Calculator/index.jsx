import React from 'react';
import ReactDOM from 'react-dom';
import Textbox from "../Textbox";
import Button from "../Button";
import "./style.css";

const btnLabels = [
    {
        label: '7',
        value: 'Seven',
        cssClass: 'col-3'
    }, {
        label: '8',
        value: 'Eight',
        cssClass: 'col-3'
    }, {
        label: '9',
        value: 'Nine',
        cssClass: 'col-3'
    }, {
        label: 'x',
        value: 'Multiply',
        cssClass: 'col-3'
    }, {
        label: '4',
        value: 'Four',
        cssClass: 'col-3'
    }, {
        label: '5',
        value: 'Five',
        cssClass: 'col-3'
    }, {
        label: '6',
        value: 'Six',
        cssClass: 'col-3'
    }, {
        label: '-',
        value: 'Minus',
        cssClass: 'col-3'
    }, {
        label: '1',
        value: 'One',
        cssClass: 'col-3'
    }, {
        label: '2',
        value: 'Two',
        cssClass: 'col-3'
    }, {
        label: '3',
        value: 'Three',
        cssClass: 'col-3'
    }, {
        label: '+',
        value: 'Plus',
        cssClass: 'col-3'
    }, {
        label: '0',
        value: 'Zero',
        cssClass: 'col-6'
    }, {
        label: '.',
        value: 'Dot',
        cssClass: 'col-3'
    }, {
        label: '=',
        value: 'Equals',
        cssClass: 'col-3'
    }
];
const buttons = btnLabels.map((btnLabel) => <Button
    key={btnLabel.label}
    label={btnLabel.label}
    cssClass={btnLabel.cssClass}
    value={btnLabel.value}/>);

class Calculator extends React.Component {
    renderButton() {
        return <Button/>;
    }

    render() {
        return <div className="outline">
            <Textbox/>
            <div className="row">
                {buttons}
            </div>
        </div>
    }
}

export default Calculator;