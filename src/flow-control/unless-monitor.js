const now = require('performance-now');

module.exports = Promise => {
	Promise.prototype.unlessMonitor = function unlessMonitor(name, conditional, method) {
		return this.unless(conditional, x => {
			const start = now();
			this.debug('starting', name);
			let value = method(x);
			value = value && value.isBluebird ? value : Promise.resolve(value);
			return value
				.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
		});
	};

	Promise.unlessMonitor = (name, conditional, method) => {
		return Promise.unless(conditional, x => {
			const start = now();
			Promise.debug('starting', name);
			let value = method(x);
			value = value && value.isBluebird ? value : Promise.resolve(value);
			return value
				.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
		});
	};
};
