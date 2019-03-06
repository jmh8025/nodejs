import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component{
    state = {
        password : '',
        clicked : false,
        validate : false
    }

    handleChange = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validate : this.state.password === '0000'
        })
        this.input.focus();
    }

    render() {
        return(
            <div>
                <input
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validate ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample;