var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(1);
            done();
        }, 1001); 
    }); 

    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');

        setTimeout(() => {
            timer.handleStatusChange('paused');
        }, 1000); 

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.count).toBe(1);
            done();
        }, 1000); 
    }); 

    it('should stop timer on stopped status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');

        setTimeout(() => {
            timer.handleStatusChange('stopped');
        }, 1000); 

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);
            done();
        }, 1000); 
    }); 
});