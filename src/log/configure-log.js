module.exports = Promise => {
	Promise.configureLog = function configureLog(log) {
		this._log = (level, text, ...args) => log(level, text, ...args);
	}
};
