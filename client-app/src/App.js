import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <h2>Billing</h2>
                    <div className="container">
                        <h3 className="title">Product scanner</h3>
                        <div className="row">
                            <div className="text">
                                <div className="title">Number of products</div>
                                <div className="description">total number of products to scan</div>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="row">
                            <div className="text">
                                <div className="title">Crawls per month</div>
                                <div className="description">How ofter should the product be scanned per month</div>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="row result">
                            <span className="warning error"></span>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="text">
                                <div className="title">Number of products</div>
                                <div className="description">total number of products to scan</div>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="row">
                            <div className="text">
                                <div className="title">Number of products</div>
                                <div className="description">total number of products to scan</div>
                            </div>
                            <div className="line"></div>
                        </div>
                        <div className="row result">
                            <span className="warning error"></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
