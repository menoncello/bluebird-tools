module.exports = Promise => {
	Promise.convert = (promise) => promise.isBluebird
			? promise
			: new Promise((resolve, reject) => {
				promise
					.then(resolve)
					.catch(reject);
			});
};
