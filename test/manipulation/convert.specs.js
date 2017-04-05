const BluebirdPromise = require('../../src');
const assert = require('chai').assert;
const sinon = require('sinon');

describe('manipulation - #convert', () => {
	context('static', () => {
		it('when passing a vanilla promise, convert to a Bluebird promise', () => {
			const vanillaPromise = new Promise((res) => res());
			const promise = BluebirdPromise.convert(vanillaPromise);

			assert.isUndefined(vanillaPromise.isBluebird);
			assert.isTrue(promise.isBluebird);
		});
		it('when passing a bluebird promise, returns the same promise', () => {
			const promise = BluebirdPromise.resolve();
			const bluebirdPromise = BluebirdPromise.convert(promise);

			assert.equal(promise, bluebirdPromise);
		});
	});
});