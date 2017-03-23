const Promise = require('../src');
const assert = require('assert');

describe('logging', () => {
	context('#Promise.configureLog', () => {
		it('when passing a log, this must be setted to _log', (done) => {
			const logFunction = () => { done(); };

			Promise.configureLog(logFunction);

			Promise.log();
		});
	});
	context('#Promise.log', () => {
		it('when logging, level and message must be equal', (done) => {
			const level = 'info';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.log(level, message);
		});
		it('when logging, level, message and args must be equal', (done) => {
			const level = 'info';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.log(level, message, arguments[0], arguments[1]);
		});
	});
	context('#log', () => {
		it('when logging, level and message must be equal', (done) => {
			const level = 'info';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().log(level, message);
		});
		it('when logging, level, message and args must be equal', (done) => {
			const level = 'info';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().log(level, message, arguments[0], arguments[1]);
		});
	});
	context('#silly', () => {
		it('when logging as silly, level must be silly and message must be equal', (done) => {
			const level = 'silly';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().silly(message);
		});
		it('when logging as silly, level must be silly, message and args must be equal', (done) => {
			const level = 'silly';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().silly(message, arguments[0], arguments[1]);
		});
	});
	context('#debug', () => {
		it('when logging as debug, level must be debug and message must be equal', (done) => {
			const level = 'debug';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().debug(message);
		});
		it('when logging as debug, level must be debug, message and args must be equal', (done) => {
			const level = 'debug';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().debug(message, arguments[0], arguments[1]);
		});
	});
	context('#verbose', () => {
		it('when logging as verbose, level must be verbose and message must be equal', (done) => {
			const level = 'verbose';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().verbose(message);
		});
		it('when logging as verbose, level must be verbose, message and args must be equal', (done) => {
			const level = 'verbose';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().verbose(message, arguments[0], arguments[1]);
		});
	});
	context('#info', () => {
		it('when logging as info, level must be info and message must be equal', (done) => {
			const level = 'info';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().info(message);
		});
		it('when logging as info, level must be info, message and args must be equal', (done) => {
			const level = 'info';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().info(message, arguments[0], arguments[1]);
		});
	});
	context('#warning', () => {
		it('when logging as warning, level must be warning and message must be equal', (done) => {
			const level = 'warning';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().warning(message);
		});
		it('when logging as warning, level must be warning, message and args must be equal', (done) => {
			const level = 'warning';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().warning(message, arguments[0], arguments[1]);
		});
	});
	context('#error', () => {
		it('when logging as error, level must be error and message must be equal', (done) => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve().error(message);
		});
		it('when logging as error, level must be error, message and args must be equal', (done) => {
			const level = 'error';
			const message = 'log test';
			const arguments = [5, 6];

			Promise.configureLog((l, msg, ...args) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				assert.equal(args[0], arguments[0]);
				assert.equal(args[1], arguments[1]);

				done();
			});

			Promise.resolve().error(message, arguments[0], arguments[1]);
		});
	});
	context('#whenLog', () => {
		it('when the result is true, must log', (done) => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog((l, msg) => {
				assert.equal(l, level);
				assert.equal(msg, message);
				done();
			});

			Promise.resolve(3)
				.whenLog(level, x => x === 3, message)
		});

		it('when the result is false, must not execute the method', (done) => {
			const level = 'error';
			const message = 'log test';

			Promise.configureLog(() => {
				done({ message: 'has logged' });
			});

			Promise.resolve(2)
				.whenLog(level, x => x === 3, message)
				.then(() => done());
		});
	});
});
