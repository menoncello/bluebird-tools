module.exports = function manipulation(Promise) {
	Promise.info = (text, ...args) => Promise.log('info', text, ...args);

	Promise.prototype.info = function info(text, ...args) {
		return this.log('info', text, ...args)
	};
};
