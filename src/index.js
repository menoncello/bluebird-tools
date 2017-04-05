const Promise = require('bluebird');

require('./flow-control')(Promise);
require('./log')(Promise);
require('./manipulation')(Promise);

module.exports = Promise;
