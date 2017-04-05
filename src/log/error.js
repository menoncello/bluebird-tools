module.exports = Promise => {
	Promise.error = (text, ...args) => Promise.log('error', text, ...args);

	Promise.prototype.error = function error(text, ...args) {
		return this.log('error', text, ...args);
	}
};
