import React, { Component } from 'react';


export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyUp : false,
            valid : true
        }

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.displayAlert = this.displayAlert.bind(this);
    }

    handleKeyUp(evt) {
        if(evt.target.value.length === 0 ) {
            this.setState({keyUp: false, valid: false});
        } else {
            this.setState({keyUp: true,  valid: true});
        }
    }

    displayAlert() {
        if (!this.state.valid) {
            return (
                <p className="form-signin-warning text-center">Required Field</p>
            );
        }

    }

    render() {

        const { key, type, label, placeholder } = this.props;
        const { keyUp, valid } = this.state;

        return (
            <label className={ !keyUp ? 'form-signin-tops empty' : 'form-signin-tops' } htmlFor={key}>
                <span>{label}</span>
                { this.displayAlert() }

                <input type={type} id={key} className={ !valid ? 'form-control form-signin-invalid' : 'form-control' } onKeyUp={this.handleKeyUp} placeholder={placeholder}></input>
            </label>
        );
    }
}
