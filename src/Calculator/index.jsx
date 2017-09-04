import React from 'react';
import ReactDOM from 'react-dom';
import Textbox from "../Textbox";
import Button from "../Button";
import "./style.css";

const btnLabels = [
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
];
const buttons = btnLabels.map((btnLabel) => 
    <Button label={btnLabel} />
);

class Calculator extends React.Component {
    renderButton() {
        return <Button />;
    }

    render() {
        return <div className="outline">
            <Textbox />
            <div className="row">
                { buttons }
            </div>
        </div>
    }
}

export default Calculator;