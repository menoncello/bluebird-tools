module.exports = (Promise) => {
	require('./for')(Promise);
	require('./for-all')(Promise);
	require('./iif')(Promise);
	require('./monitor')(Promise);
	require('./unless')(Promise);
	require('./unless-log')(Promise);
	require('./when')(Promise);
	require('./when-log')(Promise);
};
