module.exports = Promise => {
	Promise.prototype.for = function forPromise(start, end, method) {
		return this.then(val => {
			const result = [];
			for (let i = start; i < end; i++) {
				result.push(method(i, val));
			}
			return result;
		});
	};

	Promise.for = (start, end, method) => {
		return Promise.resolve().then(val => {
			const result = [];
			for (let i = start; i < end; i++) {
				result.push(method(i, val));
			}
			return result;
		});
	};
};
