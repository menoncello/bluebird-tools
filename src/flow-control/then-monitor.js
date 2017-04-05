const now = require('performance-now');

module.exports = Promise => {
	Promise.prototype.thenMonitor = function thenMonitor(name, method) {
		return this.then(x => {
			const start = now();
			this.debug('starting', name);
			return method(x)
				.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
		});
	};
};
