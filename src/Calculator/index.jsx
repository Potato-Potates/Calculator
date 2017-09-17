import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

class Calculator extends React.Component {
  state = {
    displayValue: 0
  }

  inputNumber(number) {
    let { displayValue } = this.state;

    this.setState({
      displayValue: String(number)
    });
  }
  render() {
    let { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="calculator-display">{ displayValue }</div>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <button className="calculator-key key-clear">AC</button>
              <button className="calculator-key key-sign">±</button>
              <button className="calculator-key key-percent">%</button>
            </div>
            <div className="digit-keys">
              <button className="calculator-key key-0" onClick={() => this.inputNumber(0)}>0</button>
              <button className="calculator-key key-dot">●</button>
              <button className="calculator-key key-1" onClick={() => this.inputNumber(1)}>1</button>
              <button className="calculator-key key-2" onClick={() => this.inputNumber(2)}>2</button>
              <button className="calculator-key key-3" onClick={() => this.inputNumber(3)}>3</button>
              <button className="calculator-key key-4" onClick={() => this.inputNumber(4)}>4</button>
              <button className="calculator-key key-5" onClick={() => this.inputNumber(5)}>5</button>
              <button className="calculator-key key-6" onClick={() => this.inputNumber(6)}>6</button>
              <button className="calculator-key key-7" onClick={() => this.inputNumber(7)}>7</button>
              <button className="calculator-key key-8" onClick={() => this.inputNumber(8)}>8</button>
              <button className="calculator-key key-9" onClick={() => this.inputNumber(9)}>9</button>
            </div>
          </div>
          <div className="operator-keys">
            <button className="calculator-key key-divide">÷</button>
            <button className="calculator-key key-multiply">×</button>
            <button className="calculator-key key-subtract">−</button>
            <button className="calculator-key key-add">+</button>
            <button className="calculator-key key-equals">=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;