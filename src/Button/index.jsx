import React from 'react';
import './style.css';

class Button extends React.Component {
    handleClick() {
        console.log('value', this.props.value);
    }

    render() {
        return <div className={this.props.cssClass + ' btn-wrapper'}>
            <button
                type="button"
                className="btn btn-lg btn-light btn-block"
                onClick={() => {
                this.handleClick(this.props.value)
            }}>
                {this.props.label}
            </button>
        </div>;
    }
}

export default Button;