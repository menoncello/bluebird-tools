module.exports = Promise => {
	Promise.prototype.iif = function iif(conditional, success, fail) {
		return this.then(
			val => (typeof(conditional) === 'function' ?  conditional(val) : conditional) ? success(val) : fail(val));
	};

	Promise.iif = (conditional, success, fail) =>
		new Promise(resolve =>
			((typeof(conditional) === 'function') ?  conditional() : conditional)
				? resolve(success())
				: resolve(fail()));
};
