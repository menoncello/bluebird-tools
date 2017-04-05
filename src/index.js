const Promise = require('bluebird');

require('./flow-control')(Promise);
require('./log')(Promise);
require('./manipulation')(Promise);
require('./monitor')(Promise);

module.exports = Promise;
