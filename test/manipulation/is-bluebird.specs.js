const BluebirdPromise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('manipulation - #isBluebird', () => {
	context('instance', () => {
		it('a vanilla Promise must have isBluebird as undefined', () => {
			const promise = Promise.resolve();

			assert.isUndefined(promise.isBluebird);
		});
		it('a Bluebird Promise must set isBluebird true', () => {
			const promise = BluebirdPromise.resolve();

			assert.isTrue(promise.isBluebird);
		});
	});
});