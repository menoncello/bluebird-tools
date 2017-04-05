const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('logging - #debug', () => {
	context('instance', () => {
		it('when logging as debug, level must be debug and message must be equal', done => {
			const level = 'debug';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().debug(message);
		});
		it('when logging as debug, level must be debug, message and args must be equal', done => {
			const level = 'debug';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().debug(message, arguments[0], arguments[1]);
		});
	});
	context('static', () => {
		it('when logging as debug, level must be debug and message must be equal', done => {
			const level = 'debug';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.debug(message);
		});
		it('when logging as debug, level must be debug, message and args must be equal', done => {
			const level = 'debug';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.debug(message, arguments[0], arguments[1]);
		});
	});
});