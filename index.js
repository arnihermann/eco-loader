var eco = require('eco');
var umd = require('umd-wrapper');

module.exports = function(source) {
  this.cacheable();
  return umd(eco.compile(source).toString());
};
