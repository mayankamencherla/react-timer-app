var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call on setCountDown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var form = TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy} />);
        var $el = $(ReactDOM.findDOMNode(form));

        form.refs.seconds.value = '67';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(67);
    });

    it('should not call on setCountDown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var form = TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy} />);
        var $el = $(ReactDOM.findDOMNode(form));

        form.refs.seconds.value = 'Mayank';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});