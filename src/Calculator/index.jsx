import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

class Calculator extends React.Component {
    render() {
        return <div className="outline">
            <div className="row">
                <div className="col-12">
                    <input type="text" className="form-control" name="output" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">7</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">8</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">9</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">x</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">4</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">5</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">6</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">-</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">1</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">2</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">3</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">+</button>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <button type="button" className="btn btn-lg btn-light btn-block">0</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">.</button>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-lg btn-light btn-block">=</button>
                </div>
            </div>
        </div>
    }
}

export default Calculator;