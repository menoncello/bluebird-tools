module.exports = Promise => {
	Promise.whenLog = (level, conditional, text, ...args) => Promise.resolve().whenLog(level, conditional, text, ...args);

	Promise.prototype.whenLog = function whenLog(level, conditional, text, ...args) {
		return this.then(() => {
			if (typeof(conditional) === 'function' ?  conditional(this.value()) : conditional) {
				Promise.log(level, text, ...args);
			}

			return this;
		});
	};
};
