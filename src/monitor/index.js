module.exports = (Promise) => {
	require('./iif-monitor')(Promise);
	require('./then-monitor')(Promise);
	require('./unless-monitor')(Promise);
	require('./when-monitor')(Promise);
};
