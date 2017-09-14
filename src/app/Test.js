import React from 'react';
import './style.scss';
var HelloMessage = React.createClass({
    handleClick: function(event) {
        console.log('event', event);
        event.nativeEvent.target.focus(); 
    },
    render: function() {
        return <div className="test" onClick={ this.handleClick } tabIndex="1" onBlur={this.onBlur}>
            Hello 
        </div>;
    },

    onBlur: function(e) {
        console.log('e.relatedTarget', e.relatedTarget);
        var currentTarget = e.currentTarget;

        console.log('234')
        // setTimeout(function() {
        //   if (!currentTarget.contains(document.activeElement)) {
        //       console.log('component officially blurred');
        //   }
        // }, 0);
    }
});

export default HelloMessage;
