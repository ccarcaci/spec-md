'use strict';

const { importAST } = require('./ast')

module.exports = parse;

function parse(filepath) {
  return importAST(filepath, 'initialDocument');
}
