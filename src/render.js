const { parseSpecMD } = require('./ast')
const { flattenDocuments } = require('./ast')
const print = require('./print')

function generateAST(contents) {
  const ast = parseSpecMD(contents, '', 'initialDocument');
  return flattenDocuments(ast, []);
}

//  --

function render(contents, options) {
  const ast = generateAST(contents)
  return print(ast, options)
}

module.exports = render
