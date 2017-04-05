module.exports = Promise => {
	Promise.prototype.when = function when(conditional, success) {
		return this.iif(conditional, success, x => x);
	};

	Promise.when = (conditional, success) => Promise.iif(conditional, success, x => x);
};
