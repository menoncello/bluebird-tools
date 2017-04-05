const now = require('performance-now');

module.exports = Promise => {
	Promise.prototype.iifMonitor = function iifMonitor(name, conditional, success, fail) {
		const start = now();
		return this.then(
			val => new Promise((resolve) => {
				this.debug('starting', name);

				const cond = typeof(conditional) === 'function' ?  conditional(val) : conditional;

				let result;
				if (cond) {
					this.debug('process', name, 'has success');
					result = success(val);
				} else {
					this.debug('process', name, 'has fail');
					result = fail(val);
				}

				return resolve(result);
			}))
			.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
	};

	Promise.iifMonitor = (name, conditional, success, fail) => {
		const start = now();
		let isSuccessful;

		return Promise.resolve().debug('starting', name)
			.then(() => {

				const cond = typeof(conditional) === 'function' ?  conditional() : conditional;

				let result;
				if (cond) {
					isSuccessful = true;
					result = success();
				} else {
					isSuccessful = false;
					result = fail();
				}

				return result;
			})
			.debug('process', name, isSuccessful ? 'has success' : 'has fail')
			.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
	};
};
