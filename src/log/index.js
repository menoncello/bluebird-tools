module.exports = Promise => {
	require('./configure-log')(Promise);
	require('./log')(Promise);
	require('./debug')(Promise);
	require('./error')(Promise);
	require('./info')(Promise);
	require('./silly')(Promise);
	require('./verbose')(Promise);
	require('./warning')(Promise);
};
