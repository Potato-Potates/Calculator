import React from 'react';
import './style.css';

class Button extends React.Component {
    render() {
        return <div className="col-3 btn-wrapper">
            <button type="button" className="btn btn-lg btn-light btn-block">
                {this.props.label}
            </button>
        </div>;
    }
}

export default Button;