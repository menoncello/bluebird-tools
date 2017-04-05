module.exports = function manipulation(Promise) {
	require('./convert')(Promise);
	require('./is-bluebird')(Promise);
};
