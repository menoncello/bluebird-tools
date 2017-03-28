const Promise = require('bluebird');
const now = require('performance-now');

Promise.configureLog = function configureLog(log) {
	this._log = function(level, text, ...args) {
		log(level, text, ...args);
	}
};

Promise.log = function log(level, text, ...args) {
	if (this._log) {
		this._log(level, text, ...args);
	}
	else {
		console.log(level, text, ...args);
	}

	return Promise.resolve();
};

Promise.prototype.log = function log(level, text, ...args) {
	return this.tap(() => Promise.log(level, text, ...args));
};

Promise.prototype.silly = function log(text, ...args) {
	return this.log('silly', text, ...args);
};

Promise.prototype.debug = function log(text, ...args) {
	return this.log('debug', text, ...args);
};

Promise.prototype.verbose = function log(text, ...args) {
	return this.log('verbose', text, ...args);
};

Promise.prototype.info = function log(text, ...args) {
	return this.log('info', text, ...args);
};

Promise.prototype.warning = function log(text, ...args) {
	return this.log('warning', text, ...args);
};

Promise.prototype.error = function log(text, ...args) {
	return this.log('error', text, ...args);
};

Promise.prototype.iif = function iif(conditional, success, fail) {
	return this.then(
		val => new Promise(
			(resolve) => resolve(conditional(val)
				? success(val)
				: fail(val))));
};

Promise.prototype.when = function when(conditional, success) {
	return this.iif(conditional, success, echo);
};

Promise.prototype.whenLog = function when(level, conditional, text, ...args) {
	return this.then(() => {
		if (conditional(this.value())) {
			Promise.log(level, text, ...args);
		}

		return this;
	});
};

Promise.prototype.unless = function unless(conditional, fail) {
	return this.iif(conditional, echo, fail);
};

Promise.prototype.unlessLog = function unless(level, conditional, text, ...args) {
	return this.then(() => {
			if (!conditional(this.value())) {
				Promise.log(level, text, ...args);
			}
			return this;
		}
	);
};

Promise.prototype.thenMonitor = function thenMonitor(name, method) {
	return this.then(x => {
		const start = now();
		this.debug('starting', name);
		return method(x)
			.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
	});
};

Promise.prototype.iifMonitor = function iifMonitor(name, conditional, success, fail) {
	const start = now();
	return this.then(
		val => new Promise((resolve) => {
			this.debug('starting', name);

			const cond = conditional(val);

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

Promise.prototype.whenMonitor = function thenMonitor(name, conditional, method) {
	return this.when(conditional, x => {
		const start = now();
		this.debug('starting', name);
		return method(x)
			.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
	});
};

Promise.prototype.unlessMonitor = function thenMonitor(name, conditional, method) {
	return this.unlessLog(conditional, x => {
		const start = now();
		this.debug('starting', name);
		return method(x)
			.debug('finished', name, 'in', (now() - start).toFixed(3), 'ms');
	});
};

Promise.prototype.isBluebird = true;

Promise.convert = function convert(promise) {
	return promise.isBluebird
		? promise
		: new Promise((resolve, reject) => {
			promise
				.then(resolve)
				.catch(reject);
		});
};

module.exports = Promise;

function echo(ping) {
	return ping;
}
