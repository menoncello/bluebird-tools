module.exports = function manipulation(Promise) {
	Promise.verbose = (text, ...args) => Promise.log('verbose', text, ...args);

	Promise.prototype.verbose = function warning(text, ...args) {
		return this.log('verbose', text, ...args);
	}
};
