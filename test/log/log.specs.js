const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('logging - #log', () => {
	context('instance', () => {
		it('when logging, level and message must be equal', (done) => {
			const level = 'info';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().log(level, message);
		});
		it('when logging, level, message and args must be equal', (done) => {
			const level = 'info';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().log(level, message, arguments[0], arguments[1]);
		});
	});
	context('static', () => {
		it('when logging, level and message must be equal', (done) => {
			const level = 'info';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.log(level, message);
		});
		it('when logging, level, message and args must be equal', (done) => {
			const level = 'info';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.log(level, message, arguments[0], arguments[1]);
		});
	});
});