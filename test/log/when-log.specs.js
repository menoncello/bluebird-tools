const Promise = require('../../src/index');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #whenLog', () => {
	context('instance', () => {
		it('when the conditional result is true, must log', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve(3)
				.whenLog(level, x => x === 3, message)
		});
		it('when the conditional is true, must log', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve()
				.whenLog(level, true, message)
		});
		it('when the conditional result is false, must not execute the method', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog(() => {
				done({ message: 'has logged' });
			});

			Promise.resolve(2)
				.whenLog(level, x => x === 3, message)
				.then(() => done());
		});
	});
	context('static', () => {
		it('when the conditional result is true, must log', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.whenLog(level, x => true, message)
		});
		it('when the conditional is true, must log', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.whenLog(level, true, message)
		});
		it('when the conditional result is false, must not execute the method', done => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog(() => {
				done({ message: 'has logged' });
			});

			Promise.whenLog(level, x => false, message)
				.then(() => done());
		});
	});
});