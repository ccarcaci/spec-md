const print = require('./print');
const parse = require('./parse');
const visit = require('./visit');
const render = require('./render');

function html(filepath, options) {
  return print(parse(filepath), options);
}

exports.html = html;
exports.print = print;
exports.parse = parse;
exports.render = render;
exports.visit = visit;
