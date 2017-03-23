const BluebirdPromise = require('../src');
const assert = require('chai').assert;

describe('manipulation', () => {
	context('#Promise.convert', () => {
		it('when passing vanilla promise, convert to a Bluebird promise', () => {
			const vanillaPromise = new Promise((res) => res());
			const promise = BluebirdPromise.convert(vanillaPromise);

			assert.isFunction(promise['iif']);
			assert.isNotFunction(vanillaPromise['iif']);
		});
	});
});
