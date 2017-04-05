const now = require('performance-now');

module.exports = Promise => {
	Promise.monitor = function monitor(name, method) {
		const start = now();
		Promise.log('debug', 'starting', name);
		return method()
			.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
	};
};
