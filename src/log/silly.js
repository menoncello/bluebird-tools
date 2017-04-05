module.exports = Promise => {
	Promise.silly = (text, ...args) => Promise.log('silly', text, ...args);

	Promise.prototype.silly = function silly(text, ...args) {
		return this.log('silly', text, ...args);
	}
};
