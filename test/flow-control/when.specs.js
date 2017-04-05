const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #when', () => {
	context('instance', () => {
		it('when the condition result is true, must execute the method', (done) => {
			Promise.resolve(3)
				.when(x => x === 3, (x) => {
					assert.equal(x, 3);
					done();
				});
		});

		it('when the condition is true, must execute the method', (done) => {
			Promise.resolve(3)
				.when(true, (x) => {
					assert.equal(x, 3);
					done();
				});
		});

		it('when the condition result is false, must not execute the method', (done) => {
			Promise.resolve(2)
				.when(x => x === 3, () => done({message: 'equal'}), () => {
					done({ message: 'has executed the method' });
				})
				.then(() => done());
		});
	});
	context('static', () => {
		it('when the condition result is true, must execute the method', done => Promise.when(x => true, () => done()));
		it('when the condition is true, must execute the method', done => Promise.when(true, () => done()));
		it('when the condition result is false, must not execute the method', done => {
			Promise.when(x => false, () => done({ message: 'has executed the method' })).then(() => done());
		});
	});
});