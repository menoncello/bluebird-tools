module.exports = Promise => {
	Promise.prototype.forAll = function forMethod(start, end, method) {
		const promises = [];
		for (let i = start; i < end; i++) {
			promises.push(new Promise((resolve, reject) => {
				try {
					const result = method(i, this.value());
					resolve(result);
				}
				catch (e) {
					reject(e);
				}
			}));
		}
		return Promise.all(promises);
	};

	Promise.forAll = function forMethod(start, end, method) {
		const promises = [];
		for (let i = start; i < end; i++) {
			promises.push(new Promise((resolve, reject) => {
				try {
					const result = method(i);
					resolve(result);
				}
				catch (e) {
					reject(e);
				}
			}));
		}
		return Promise.all(promises);
	};
};
