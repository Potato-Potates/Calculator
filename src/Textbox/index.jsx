import React from 'react';
import ReactDOM from 'react-dom';

class Textbox extends React.Component {
    render() {
        return <div className="row">
            <div className="col-12">
                <input type="text" className="form-control" name="output"/>
            </div>
        </div>;
    }
}

export default Textbox;