module.exports = (Promise) => {
	Promise.log = (level, text, ...args) => {
		if (Promise._log) {
			Promise._log(level, text, ...args);
		}
		else {
			console.log(level, text, ...args);
		}

		return Promise.resolve();
	};

	Promise.prototype.log = function log(level, text, ...args) {
		return this.tap(() => Promise.log(level, text, ...args));
	};
};
