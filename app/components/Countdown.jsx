var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0     
        };
    },
    handleSetCountDown: function(seconds) {
        this.setState({seconds});
    },
    render: function() {
        var {seconds} = this.state;
        return (
            <div>
                <Clock totalSeconds={seconds} />
                <CountdownForm onSetCountDown={this.handleSetCountDown} />
            </div>
        );    
    }
});

module.exports = Countdown;