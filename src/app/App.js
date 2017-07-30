import React, { Component } from 'react/react.js';
import './style.scss';
const childCompArr = [];
class Child extends Component {
    componentDidMount() {
        childCompArr.push(this);
    }
    render() {
        return (
            <div className="inner">
                inner
            </div>
        )
    }
}
class App extends Component {
    constructor(props) {
        super(props);
    }
    handleClick(event) {
        console.log('childCompArr', childCompArr);
        console.log('wrap', event, event.currentTarget, event.target); 
    }
    render() {
        return (
            <div onClick={ this.handleClick.bind(this) } className="wrap">
                <Child />
            </div>
        )
    }
}
export default App;
