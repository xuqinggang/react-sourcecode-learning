import React, { Component } from 'react';
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
    handleContainerClick(event) {
        console.blue('handleContainerClick');
        console.log('event', event);

    }
    handleInnerClick(event, a, b, c) {
        // event.persist();
        console.blue('handleInnerClick');
        console.log('childCompArr', childCompArr);
        console.log('wrap', event, event.currentTarget, event.target); 
        throw Error('asdf');
        // console.log(xxx);
        console.log('a, b, c', a, b, c);
        // setTimeout(function() {
        //     console.log(event,'xxxxxx'); // => null
        // }, 0);
    }
    handleTestClick() {
        console.blue('handleTestClick');
    }
    componentDidMount() {
        console.blue(this.divRef,'1231', this.childRef);
    }
    render() {
        return (
            <div className='container' onClick={ this.handleContainerClick.bind(this) } >
                <div className="wrap" onClick={ this.handleTestClick }>
                    <div ref={ divRef => { this.divRef = divRef } } onClick={ this.handleInnerClick.bind(this) } className="wrap1">
                        <Child ref= { childRef => { this.childRef = childRef } }/>
                    </div>
                </div>
                {
                    // <div ref={ divRef => { this.divRef = divRef } }onClick={ this.handleInnerClick.bind(this) } className="wrap2">
                    //     <Child ref= { childRef => { this.childRef = childRef } }/>
                    // </div>
                }
            </div>
        )
    }
}
export default App;
