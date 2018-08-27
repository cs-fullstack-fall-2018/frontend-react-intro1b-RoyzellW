import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';

class Newbie extends Component {
    render() {
        return (
            <div className="Newbie">

                <p className="Newbie2">

                </p>
                <h1>{this.props.word} is ten years old.</h1>
            </div>
        );

    }
}

export default Newbie;
