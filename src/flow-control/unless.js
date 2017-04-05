module.exports = Promise => {
	Promise.prototype.unless = function unless(conditional, fail) {
		return this.iif(conditional, x => x, fail);
	};

	Promise.unless = (conditional, fail) => Promise.iif(conditional, x => x, fail);
};
