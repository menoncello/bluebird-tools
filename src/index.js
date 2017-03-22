const Promise = require('bluebird');

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
	return Promise.log(level, text, ...args);
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
	const val = this.value();
	return new Promise((resolve) => resolve(conditional(val) ? success(val) : fail(val)));
};

Promise.prototype.when = function when(conditional, success) {
	return this.iif(conditional, success, echo);
};

Promise.prototype.unless = function unless(conditional, fail) {
	return this.iif(conditional, echo, fail);
};

module.exports = Promise;

function echo(ping) {
	return ping;
}
