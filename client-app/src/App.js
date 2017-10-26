import React, {Component} from 'react';
import Slider from 'react-rangeslider'
import classNames from 'classnames';

import 'react-rangeslider/lib/index.css'
import './App.css';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            productSlide: {
                values: {
                    0: 0,
                    25: 50,
                    50: 75,
                    75: 150,
                    100: 250,
                },
                value: 75,
                selectedValue: 150,
                step: 25,
                tooltip: false,
                labels: {
                    0: "off($0)",
                    25: "100($50)",
                    50: "200($75)",
                    75: "500($150)",
                    100: "1000($250)",
                }
            },
            crawlSlide: {
                values: {
                    0: 1,
                    25: 2,
                    50: 3,
                    75: 5,
                    100: 15,
                },
                value: 25,
                step: 25,
                selectedValue: 2,
                tooltip: false,
                labels: {
                    0: "1",
                    25: "2(2x)",
                    50: "4(3x)",
                    75: "8(5x)",
                    100: "30(15x)",
                }
            },
            accountSlide: {
                values: {
                    0: 0,
                    25: 10,
                    50: 17.50,
                    75: 30,
                    100: 50,
                },
                value: 50,
                step: 25,
                selectedValue: 17.50,
                tooltip: false,
                labels: {
                    0: "off($0)",
                    25: "1($10)",
                    50: "2($17.50)",
                    75: "5($30)",
                    100: "10($50)",
                }
            }
        }
    }

    onHandlingSlideValue = (value, _type) => {
        switch (_type) {
            case 'account':
                this.state.accountSlide.value = value;
                this.setState({
                    accountSlide: this.state.accountSlide
                });
                break;
            case 'crawl':
                this.state.crawlSlide.value = value;
                this.setState({
                    crawlSlide: this.state.crawlSlide
                });
                break;
            default:
                this.state.productSlide.value = value;
                this.setState({
                    productSlide: this.state.productSlide
                });
        }
    };

    onHandlingSlideValueComplete = (_type) => {
        switch (_type) {
            case 'account':
                if (this.state.accountSlide.selectedValue !== this.state.accountSlide.values[this.state.accountSlide.value]) {
                    this.state.accountSlide.selectedValue = this.state.accountSlide.values[this.state.accountSlide.value];
                    this.setState({
                        accountSlide: this.state.accountSlide
                    });
                }
                break;
            case 'crawl':
                if (this.state.crawlSlide.selectedValue !== this.state.crawlSlide.values[this.state.crawlSlide.value]) {
                    this.state.crawlSlide.selectedValue = this.state.crawlSlide.values[this.state.crawlSlide.value];
                    this.setState({
                        crawlSlide: this.state.crawlSlide
                    });
                }
                break;
            default:
                if (this.state.productSlide.selectedValue !== this.state.productSlide.values[this.state.productSlide.value]) {
                    this.state.productSlide.selectedValue = this.state.productSlide.values[this.state.productSlide.value];
                    this.setState({
                        productSlide: this.state.productSlide
                    });
                }
        }
    };

    render() {
        const {productSlide, crawlSlide, accountSlide} = this.state;
        return (
            <div className="App">
                <div className="App-intro">
                    <h2>Billing</h2>
                    <div className="container">
                        <div className="name">Product scanner</div>
                        <div className="row">
                            <div className="text">
                                <div className="title">Number of products</div>
                                <div className="description">Total number of products to scan</div>
                            </div>
                            <div className="line">
                                <Slider
                                    value={this.state.productSlide.value}
                                    step={this.state.productSlide.step}
                                    labels={this.state.productSlide.labels}
                                    tooltip={this.state.productSlide.tooltip}
                                    onChange={(value) => this.onHandlingSlideValue(value)}
                                    onChangeComplete={() => this.onHandlingSlideValueComplete('product')}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text">
                                <div className="title">Crawls per month</div>
                                <div className="description">How ofter should the product be scanned per month</div>
                            </div>
                            <div className="line">
                                <Slider
                                    value={this.state.crawlSlide.value}
                                    step={this.state.crawlSlide.step}
                                    labels={this.state.crawlSlide.labels}
                                    tooltip={this.state.crawlSlide.tooltip}
                                    onChange={(value) => this.onHandlingSlideValue(value, 'crawl')}
                                    onChangeComplete={() => this.onHandlingSlideValueComplete('crawl')}
                                />
                            </div>
                        </div>
                        <div className={classNames("result", {'error': productSlide.selectedValue <= 75})}>
                            ${productSlide.selectedValue} x {crawlSlide.selectedValue} = &nbsp;
                            <b>${productSlide.selectedValue * crawlSlide.selectedValue}</b> / month
                            <span className="warning error">You have more then 100 products. Correct this first.</span>
                        </div>

                        <hr className="separator"/>

                        <div className="name">Account connector</div>
                        <div className="row">
                            <div className="text">
                                <div className="title">Connected accounts</div>
                                <div className="description">Total number of connected accounts</div>
                            </div>
                            <div className="line">
                                <Slider
                                    value={this.state.accountSlide.value}
                                    step={this.state.accountSlide.step}
                                    labels={this.state.accountSlide.labels}
                                    tooltip={this.state.accountSlide.tooltip}
                                    onChange={(value) => this.onHandlingSlideValue(value, 'account')}
                                    onChangeComplete={() => this.onHandlingSlideValueComplete('account')}
                                />
                            </div>
                        </div>
                        <div className="result">
                            <b>
                                ${parseInt(accountSlide.selectedValue) < accountSlide.selectedValue ?
                                accountSlide.selectedValue.toFixed(2) : accountSlide.selectedValue}
                            </b> / month
                            <span className="warning error"></span>
                        </div>

                        <hr className="separator"/>

                        <div className="total">
                            Grant total:&nbsp;
                            ${(productSlide.selectedValue * crawlSlide.selectedValue + accountSlide.selectedValue).toFixed(2)}&nbsp;
                            / month
                            <button className="btn">Update</button>
                            <button className="btn">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
