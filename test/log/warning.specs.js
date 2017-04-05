const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('logging - #warning', () => {
	context('instance', () => {
		it('when logging as warning, level must be warning and message must be equal', done => {
			const level = 'warning';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().warning(message);
		});
		it('when logging as warning, level must be warning, message and args must be equal', done => {
			const level = 'warning';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().warning(message, arguments[0], arguments[1]);
		});
	});
	context('static', () => {
		it('when logging as warning, level must be warning and message must be equal', done => {
			const level = 'warning';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.warning(message);
		});
		it('when logging as warning, level must be warning, message and args must be equal', done => {
			const level = 'warning';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.warning(message, arguments[0], arguments[1]);
		});
	});
});