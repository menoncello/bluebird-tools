const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #thenMonitor', () => {
	context('instance', () => {
		it('should call method, passing the value of the promise', done => {
			Promise.resolve(3)
				.thenMonitor('message test', (x) => {
					assert.equal(x, 3);
					done();
					return Promise.resolve();
				})
				.catch(done);
		});
		it('should call 2 times the log method', done => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.resolve()
				.thenMonitor('', Promise.resolve)
				.then(() => {
					assert.isTrue(log.calledTwice);
					done();
					return Promise.resolve();
				})
				.catch(e => done(e));
		});
	});
});