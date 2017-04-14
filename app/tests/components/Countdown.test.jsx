var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountDown', () => {
        it('should set state to started and count down 1 sec correctly', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountDown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countDownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should never let the count go to a negative number', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountDown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBeGreaterThanOrEqualTo(0);
                done();
            }, 2001);   
        }); 
    });
});