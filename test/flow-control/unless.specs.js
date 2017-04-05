const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #unless', () => {
	context('instance', () => {
		it('when the condition result is false, must execute the method', done => {
			Promise.resolve(2)
				.unless(x => x === 3, (x) => {
					assert.equal(x, 2);
					done();
				});
		});
		it('when the condition is false, must execute the method', done => {
			Promise.resolve(2)
				.unless(x => x === 3, (x) => {
					assert.equal(x, 2);
					done();
				});
		});
		it('when the condition result is true, must not execute the method', done => {
			Promise.resolve(3)
				.unless(x => x === 3, () => done({message: 'equal'}), () => {
					done({ message: 'has executed the method' });
				})
				.then(() => done());
		});
	});
	context('static', () => {
		it('when the condition result is false, must execute the method', done => {
			Promise.unless(x => false, () => done());
		});
		it('when the condition is false, must execute the method', done => {
			Promise.unless(false, () => done());
		});
		it('when the condition result is true, must not execute the method', done => {
			Promise.unless(x => true, () => done({ message: 'has executed the method' }))
				.then(() => done());
		});
	});
});
