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
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            switch (this.state.countDownStatus) {
                case 'started':
                    this.startTimer();
                    break;

                case 'stopped':
                    this.setState({count: 0});

                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        /**
         *  Every one second, increase count by 1
         */
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({count: newCount});
        }, 1000);
    },
    handleStatusChange: function(newStatus) {
        this.setState({countDownStatus: newStatus});
    },
    render: function() {
        var {count, countDownStatus} = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                <Controls countDownStatus={countDownStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
});

module.exports = Timer;