var React = require('react');

var Controls = React.createClass({
    proptypes: {
        countDownStatus: React.PropTypes.string.isRequired
    },
    render: function() {
        var {countDownStatus} = this.props;
        var renderStartStopButton = () => {
            if (countDownStatus === 'started') {
                return <button className="button secondary">Pause</button>;
            } else {
                return <button className="button primary">Start</button>;
            }
        };

        return (
            <div>
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;