const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #iif', () => {
	context('instance', () => {
		it('when the condition result is true, must execute the success function', (done) => {
			Promise.resolve(3)
				.iif(x => x === 3, (x) => {
					assert.equal(x, 3);
					done();
				}, () => done({message: 'different'}));
		});
		it('when the condition is true, must execute the success function', (done) => {
			Promise.resolve(3)
				.iif(true, (x) => {
					assert.equal(x, 3);
					done();
				}, () => done({message: 'different'}));
		});
		it('when the condition result is false, must execute the fail function', (done) => {
			Promise.resolve(2)
				.iif(x => x === 3, () => done({message: 'equal'}), (x) => {
					assert.equal(x, 2);
					done();
				});
		});
	});
	context('static', () => {
		it('when the condition result is true, must execute the success function', done =>
			Promise.iif(() => true, () => done(), () => done({message: 'different'})));
		it('when the condition is true, must execute the success function', (done) => {
			Promise.iif(true, () => done(), () => done({message: 'different'}));
		});
		it('when the condition result is false, must execute the fail function', done =>
			Promise.iif(() => false, () => done({message: 'equal'}), () => done()));
	});
});