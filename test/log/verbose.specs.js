const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('logging - #verbose', () => {
	context('instance', () => {
		it('when logging as verbose, level must be verbose and message must be equal', done => {
			const level = 'verbose';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().verbose(message);
		});
		it('when logging as verbose, level must be verbose, message and args must be equal', done => {
			const level = 'verbose';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().verbose(message, arguments[0], arguments[1]);
		});
	});
	context('static', () => {
		it('when logging as verbose, level must be verbose and message must be equal', done => {
			const level = 'verbose';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.verbose(message);
		});
		it('when logging as verbose, level must be verbose, message and args must be equal', done => {
			const level = 'verbose';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.verbose(message, arguments[0], arguments[1]);
		});
	});
});