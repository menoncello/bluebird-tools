module.exports = (Promise) => {
	require('./for')(Promise);
	require('./for-all')(Promise);
	require('./iif')(Promise);
	require('./iif-monitor')(Promise);
	require('./monitor')(Promise);
	require('./then-monitor')(Promise);
	require('./unless')(Promise);
	require('./unless-log')(Promise);
	require('./unless-monitor')(Promise);
	require('./when')(Promise);
	require('./when-log')(Promise);
	require('./when-monitor')(Promise);
};
