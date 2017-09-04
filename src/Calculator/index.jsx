import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
    render() {
        return <div class="outline">
            <div class="row">
                <div class="col-12">
                    <input type="text" class="form-control" name="output" />
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">7</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">8</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">9</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">x</button>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">4</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">5</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">6</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">-</button>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">1</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">2</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">3</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">+</button>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button type="button" class="btn btn-lg btn-light btn-block">0</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">.</button>
                </div>
                <div class="col-3">
                    <button type="button" class="btn btn-lg btn-light btn-block">=</button>
                </div>
            </div>
        </div>
    }
}

export default Calculator;