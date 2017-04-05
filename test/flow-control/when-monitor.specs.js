const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #whenMonitor', () => {
	context('instance', () => {
		it('when conditional results is true, should call method, passing the value of the promise', done => {
			Promise.resolve(3)
				.whenMonitor('message test', x => x === 3, (x) => {
					assert.equal(x, 3);
					done();
					return Promise.resolve();
				})
				.catch(done);
		});
		it('when conditional is true, should call method', done => {
			Promise.resolve().whenMonitor('message test', true, () => done()).catch(done);
		});
		it('when conditional results is true, should call 2 times the log method', done => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.resolve(3)
				.whenMonitor('', x => x === 3, () => Promise.resolve())
				.then(() => {
					assert.isTrue(log.calledTwice);
					done();
					return Promise.resolve();
				})
				.catch(e => done(e));
		});
	});
	context('static', () => {
		it('when conditional results is true, should call method, passing the value of the promise', done => {
			Promise.whenMonitor('message test', x => true, () => done()).catch(done);
		});
		it('when conditional is true, should call method', done => {
			Promise.whenMonitor('message test', true, () => done()).catch(done);
		});
		it('when conditional results is true, should call 2 times the log method', done => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.whenMonitor('', x => true, () => Promise.resolve()).then(() => done()).catch(e => done(e));
		});
	});
});