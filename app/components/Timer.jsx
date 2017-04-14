var React = require('react');
var Controls = require('Controls');

var Clock = require('Clock');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countDownStatus: 'stopped'
        };
    },
    render: function() {
        var {count, countDownStatus} = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <Controls countDownStatus={countDownStatus} />
            </div>
        );
    }
});

module.exports = Timer;