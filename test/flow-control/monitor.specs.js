const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #monitor', () => {
	context('static', () => {
		it('should call method', done => {
			Promise.monitor('message test', () => {
				done();
				return Promise.resolve();
			})
				.catch(done);
		});
		it('should call 2 times the log method', done => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.monitor('', Promise.resolve)
				.then(() => {
					assert.isTrue(log.calledTwice);
					done();
					return Promise.resolve();
				})
				.catch(e => done(e));
		});
	});
});