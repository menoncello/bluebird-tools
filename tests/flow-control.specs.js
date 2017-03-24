const Promise = require('../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control', () => {
	context('#iif', () => {
		it('when the result is true, must execute the success function', (done) => {
			Promise.resolve(3)
				.iif(x => x === 3, (x) => {
					assert.equal(x, 3);
					done();
				}, () => done({message: 'different'}));
		});

		it('when the result is false, must execute the fail function', (done) => {
			Promise.resolve(2)
				.iif(x => x === 3, () => done({message: 'equal'}), (x) => {
					assert.equal(x, 2);
					done();
				});
		});
	});
	context('#when', () => {
		it('when the result is true, must execute the method', (done) => {
			Promise.resolve(3)
				.when(x => x === 3, (x) => {
					assert.equal(x, 3);
					done();
				});
		});

		it('when the result is false, must not execute the method', (done) => {
			Promise.resolve(2)
				.when(x => x === 3, () => done({message: 'equal'}), (x) => {
					done({ message: 'has executed the method' });
				})
				.then(() => done());
		});
	});
	context('#unless', () => {
		it('when the result is false, must execute the method', (done) => {
			Promise.resolve(2)
				.unless(x => x === 3, (x) => {
					assert.equal(x, 2);
					done();
				});
		});

		it('when the result is true, must not execute the method', (done) => {
			Promise.resolve(3)
				.unless(x => x === 3, () => done({message: 'equal'}), (x) => {
					done({ message: 'has executed the method' });
				})
				.then(() => done());
		});
	});
	context('#thenMonitor', () => {
		it('should call method, passing the value of the promise', (done) => {
			Promise.resolve(3)
				.thenMonitor('message test', (x) => {
					assert.equal(x, 3);
					done();
					return Promise.resolve();
				})
				.catch(done);
		});

		it('should call 2 times the log method', (done) => {
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

	context('#whenMonitor', () => {
		it('when conditional is true, should call method, passing the value of the promise', (done) => {
			Promise.resolve(3)
				.whenMonitor('message test', x => x === 3, (x) => {
					assert.equal(x, 3);
					done();
					return Promise.resolve();
				})
				.catch(done);
		});

		it('when conditional is true, should call 2 times the log method', (done) => {
			const log = sinon.spy();
			Promise.configureLog(log);
			Promise.resolve(3)
				.whenMonitor('', x => x === 3, Promise.resolve)
				.then(() => {
					assert.isTrue(log.calledTwice);
					done();
					return Promise.resolve();
				})
				.catch(e => done(e));
		});
	});
	// context('#whenMonitor', () => {
	// 	it('when the result is true, must execute the method', (done) => {
	// 		Promise.resolve(3)
	// 			.when(x => x === 3, (x) => {
	// 				assert.equal(x, 3);
	// 				done();
	// 			});
	// 	});
	//
	// 	it('when the result is false, must not execute the method', (done) => {
	// 		Promise.resolve(2)
	// 			.when(x => x === 3, () => done({message: 'equal'}), (x) => {
	// 				done({ message: 'has executed the method' });
	// 			})
	// 			.then(() => done());
	// 	});
	// });
});
