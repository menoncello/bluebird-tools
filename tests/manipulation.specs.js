const BluebirdPromise = require('../src');
const assert = require('chai').assert;

describe('manipulation', () => {
	context('#Promise.convert', () => {
		it('when passing vanilla promise, convert to a Bluebird promise', () => {
			const vanillaPromise = new Promise((res) => res());
			const promise = BluebirdPromise.convert(vanillaPromise);

			assert.isUndefined(vanillaPromise.isBluebird);
			assert.isTrue(promise.isBluebird);
		});
	});

	context('#isBluebird', () => {
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
