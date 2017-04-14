var React = require('react');
var Controls = require('Controls');

var Clock = require('Clock');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },
    componentWillUnmount: function() {
        /**
         * Clearing timer before leaving the component 
         */
        clearInterval(this.timer);
        this.timer = undefined;
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
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
        this.setState({timerStatus: newStatus});
    },
    render: function() {
        var {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count} />
                <Controls countStatus={timerStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
});

module.exports = Timer;