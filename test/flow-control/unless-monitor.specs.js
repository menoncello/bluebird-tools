const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #unlessMonitor', () => {
	context('instance', () => {
		it('when conditional result is false, should call method, passing the value of the promise', done => {
			Promise.resolve(3)
				.unlessMonitor('message test', x => x === 2, (x) => {
					assert.equal(x, 3);
					done();
					return Promise.resolve();
				})
				.catch(done);
		});
		it('when conditional is false, should call method, passing the value of the promise', done => {
			Promise.resolve()
				.unlessMonitor('message test', false, () => done())
				.catch(done);
		});
		it('when conditional result is false, should call 2 times the log method', done => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.resolve(3)
				.unlessMonitor('', x => x === 2, Promise.resolve)
				.then(() => {
					assert.isTrue(log.calledTwice);
					done();
					return Promise.resolve();
				})
				.catch(e => done(e));
		});
	});
	context('static', () => {
		it('when conditional result is false, should call method, passing the value of the promise', done => {
			Promise.unlessMonitor('message test', x => false, () => done()).catch(done);
		});
		it('when conditional is false, should call method, passing the value of the promise', done => {
			Promise.unlessMonitor('message test', false, () => done()).catch(done);
		});
		it('when conditional result is false, should call 2 times the log method', done => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.unlessMonitor('', x => false, () => Promise.resolve()).then(() => done()).catch(e => done(e));
		});
	});
});