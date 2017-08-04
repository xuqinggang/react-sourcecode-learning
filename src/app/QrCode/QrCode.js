import React, { Component } from 'react';
import QrImg from './test1.jpg';
class QrCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('click', e => {
            this.setState({
                active: false,
            });
        })
    }
    handleClick() {
        this.setState({
            active: !this.state.active,
        })
    }
    handleClickQr(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        return (
            <div>
                <button onClick={ this.handleClick }>二维码</button>
                <div onClick={ this.handleClickQr } style={ { display: this.state.active ? 'block' : 'none' } }>
                    <img src={ QrImg } alt="" />
                </div>
            </div>
        )
    }
}
export default QrCode;
