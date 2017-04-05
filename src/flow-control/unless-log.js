module.exports = Promise => {
	Promise.prototype.unlessLog = function unless(level, conditional, text, ...args) {
		return this.then(() => {
				if (!(typeof(conditional) === 'function' ?  conditional(this.value()) : conditional)) {
					return this.log(level, text, ...args);
				}
				return this;
			}
		);
	};

	Promise.unlessLog = (level, conditional, text, ...args) => {
		if (!(typeof(conditional) === 'function' ?  conditional() : conditional)) {
			return Promise.log(level, text, ...args);
		}
		return Promise.resolve();
	};
};
