const Promise = require('../../src/index');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #unlessLog', () => {
	context('instance', () => {
		it('when the conditional result is false, must log', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve(3)
				.unlessLog(level, x => x === 2, message)
		});
		it('when the conditional is false, must log', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve()
				.unlessLog(level, false, message)
		});
		it('when the conditional result is true, must not execute the method', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog(() => {
				done({ message: 'has logged' });
			});

			Promise.resolve(3)
				.unlessLog(level, x => x === 3, message)
				.then(() => done());
		});
	});
	context('static', () => {
		it('when the conditional result is false, must log', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.unlessLog(level, x => false, message)
		});
		it('when the conditional is false, must log', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.unlessLog(level, false, message)
		});
		it('when the conditional result is true, must not execute the method', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog(() => {
				done({ message: 'has logged' });
			});

			Promise.unlessLog(level, x => true, message)
				.then(() => done());
		});
	});
});