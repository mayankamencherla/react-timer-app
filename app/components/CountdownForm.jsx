var React = require('react');

var Controls = require('Controls');

var CountdownForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)){
            this.refs.seconds.value = '';
            this.props.onSetCountDown(parseInt(strSeconds, 10));
        }
    },
    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" />
                    <Controls countDownStatus={this.props.countDownStatus} />
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;