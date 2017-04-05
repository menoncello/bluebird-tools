const Promise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('flow control - #for', () => {
	context('instance', () => {
		it('when called 0 to 10, i variable must be from 0 to 10', done => {
			let val = 0;
			Promise.resolve()
				.for(0, 10, (i) => assert.equal(i, val++))
				.then(() => done());
		});
		it('when called from a resolved value, the val must be equal', done => {
			let val = 3;
			Promise.resolve(val)
				.for(0, 10, (i, v) => assert.equal(v, val))
				.then(() => done());
		});
	});
	context('static', () => {
		it('when called 0 to 10, i variable must be from 0 to 10', done => {
			let val = 0;
			Promise.for(0, 10, (i) => assert.equal(i, val++))
				.then(() => done());
		});
	});
});