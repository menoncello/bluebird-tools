module.exports = function manipulation(Promise) {
	Promise.warning = (text, ...args) => Promise.log('warning', text, ...args);

	Promise.prototype.warning = function warning(text, ...args) {
		return this.log('warning', text, ...args);
	}
};
