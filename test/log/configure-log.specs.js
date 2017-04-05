const Promise = require('../../src');

describe('logging - #configureLog', () => {
	context('static', () => {
		it('when passing a log, this must be set to _log', (done) => {
			const logFunction = () => { done(); };

			Promise.configureLog(logFunction);

			Promise.log();
		});
	});
});