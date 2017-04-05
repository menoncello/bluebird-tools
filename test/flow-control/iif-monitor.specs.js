const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #iifMonitor', () => {
	context('instance', () => {
		it('when conditional results is true, should call success method, passing the value of the promise', done => {
			Promise.resolve(3)
				.iifMonitor('message test', x => x === 3, (x) => {
					assert.equal(x, 3);
					done();
					return Promise.resolve();
				}, () => done({ message: 'this is the fail method' }))
				.catch(done);
		});
		it('when conditional is true, should call success method, passing the value of the promise', done => {
			Promise.resolve()
				.iifMonitor('message test', true, () => done(), () => done({ message: 'this is the fail method' }))
				.catch(done);
		});
		it('when conditional results is fails, should call fail method, passing the value of the promise', done => {
			Promise.resolve(3)
				.iifMonitor('message test', x => x === 2, () => done({ message: 'this is the success method' }), (x) => {
					assert.equal(x, 3);
					done();
					return Promise.resolve();
				})
				.catch(done);
		});
		it('when conditional is fails, should call fail method, passing the value of the promise', done => {
			Promise.resolve()
				.iifMonitor('message test', false, () => done({ message: 'this is the success method' }), (x) => done())
				.catch(done);
		});
		it('when conditional results is true, should call 3 times the log method', done => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.resolve(3)
				.iifMonitor('message test', x => x === 3, Promise.resolve, Promise.resolve,
					() => done({ message: 'this is the fail method' }))
				.then(() => {
					assert.equal(3, log.callCount);
					done();
					return Promise.resolve();
				})
				.catch(done);
		});
	});
	context('static', () => {
		it('when conditional results is true, should call success method, passing the value of the promise', done => {
			Promise.iifMonitor('message test', x => true, () => done(), () => done({ message: 'this is the fail method' }))
				.catch(done);
		});
		it('when conditional is true, should call success method, passing the value of the promise', done => {
			Promise.iifMonitor('message test', true, () => done(), () => done({ message: 'this is the fail method' }))
				.catch(done);
		});
		it('when conditional results is fails, should call fail method, passing the value of the promise', done => {
			Promise.iifMonitor('message test', false, () => done({ message: 'this is the success method' }), () => done())
				.catch(done);
		});
		it('when conditional is fails, should call fail method, passing the value of the promise', done => {
			Promise.iifMonitor('message test', false, () => done({ message: 'this is the success method' }), (x) => done())
				.catch(done);
		});
		it('when conditional results is true, should call 3 times the log method', done => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.iifMonitor('message test', x => true, Promise.resolve, Promise.resolve,
					() => done({ message: 'this is the fail method' }))
				.then(() => {
					assert.equal(3, log.callCount);
					done();
					return Promise.resolve();
				})
				.catch(done);
		});
	});
});