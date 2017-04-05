const now = require('performance-now');

module.exports = Promise => {
	Promise.prototype.whenMonitor = function whenMonitor(name, conditional, method) {
		return this.when(conditional, x => {
			const start = now();
			this.debug('starting', name);
			let value = method(x);
			value = value && value.isBluebird ? value : Promise.resolve(value);
			return value
				.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
		});
	};

	Promise.whenMonitor = (name, conditional, method) => {
		return Promise.whenLog(conditional, x => {
			const start = now();
			Promise.debug('starting', name);
			let value = method(x);
			value = value && value.isBluebird ? value : Promise.resolve(value);
			return value
				.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
		});
	};
};
