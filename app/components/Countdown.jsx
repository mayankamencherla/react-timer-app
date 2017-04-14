var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,  
            countDownStatus: 'stopped',
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
        if (this.state.countDownStatus !== prevState.countDownStatus) {
            switch (this.state.countDownStatus) {
                case 'started': 
                    this.startTimer();
                    break;

                /** 
                 * Setting count to 0 for stopped case
                 * And then stopping timer
                **/
                case 'stopped':
                    this.setState({count: 0});

                /** 
                 * Leaving count as is and clearing the timer
                **/
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        /**
         *  Every one second, decrease count by 1
         */
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            /** 
             * If count becomes 0, set the timer as stopped
            **/
            if (newCount === 0) {
                this.setState({countDownStatus: 'stopped'});
            }
        }, 1000);
    },
    handleSetCountDown: function(seconds) {
        this.setState({
            count: seconds, 
            countDownStatus: 'started',
        });
    },
    handleStatusChange: function(newStatus) {
        this.setState({countDownStatus: newStatus});
    },
    render: function() {
        var {count, countDownStatus} = this.state;
        var renderControlArea = () => {
            if (countDownStatus !== 'stopped') {
                return (
                    <Controls countStatus={countDownStatus} onStatusChange={this.handleStatusChange} />
                );
            } else {
                return (
                    <CountdownForm onSetCountDown={this.handleSetCountDown} countDownStatus={countDownStatus} onStatusChange={this.onStatusChange} />
                );
            }
        };

        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        );    
    }
});

module.exports = Countdown;