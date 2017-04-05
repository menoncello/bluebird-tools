module.exports = Promise => {
	Promise.debug = (text, ...args) => Promise.log('debug', text, ...args);

	Promise.prototype.debug = function debug(text, ...args) {
		return this.log('debug', text, ...args);
	}
};
